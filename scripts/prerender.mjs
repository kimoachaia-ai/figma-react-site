/**
 * Pre-renders the home page to static HTML after `vite build`.
 * Puppeteer visits the built site, waits for React to fully render,
 * then writes the rendered HTML back to dist/index.html.
 * This lets Google and other crawlers see the full page content
 * without needing to execute JavaScript themselves.
 */

import puppeteer from "puppeteer";
import { preview } from "vite";
import { writeFileSync } from "fs";
import { execSync } from "child_process";

function findSystemChrome() {
  const candidates = [
    "google-chrome-stable",
    "google-chrome",
    "chromium-browser",
    "chromium",
  ];
  for (const bin of candidates) {
    try {
      const path = execSync(`which ${bin}`, { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
      if (path) return path;
    } catch {}
  }
  return null;
}

async function prerender() {
  console.log("Starting pre-render...");

  const server = await preview({ preview: { port: 4173, strictPort: false } });
  const address = server.resolvedUrls?.local?.[0] ?? "http://localhost:4173";
  console.log(`Preview server: ${address}`);

  const systemChrome = findSystemChrome();
  const launchOptions = {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
    ...(systemChrome && { executablePath: systemChrome }),
  };

  if (systemChrome) {
    console.log(`Using system Chrome: ${systemChrome}`);
  } else {
    console.log("Using Puppeteer bundled Chrome");
  }

  const browser = await puppeteer.launch(launchOptions);

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(address, { waitUntil: "networkidle0", timeout: 60000 });

    // Extra wait for i18n + animations to settle
    await new Promise((r) => setTimeout(r, 2000));

    const rendered = await page.content();

    writeFileSync("./dist/index.html", rendered, "utf-8");
    console.log("Pre-render complete: dist/index.html updated.");
  } finally {
    await browser.close();
    server.httpServer.close();
  }
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
