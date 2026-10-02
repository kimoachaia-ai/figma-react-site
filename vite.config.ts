import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import vitePrerender from 'vite-plugin-prerender' // 1. Import it

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://achaiawood.com',
    }),
    // 2. Add the prerender configuration
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'], // Add any other public routes like ['/', '/about']
      renderer: new vitePrerender.PuppeteerRenderer({
        renderAfterTime: 3000, // Gives your app 3 seconds to execute JS/animations before taking the HTML snapshot
      }),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
