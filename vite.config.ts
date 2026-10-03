import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
// @ts-ignore - Ignore missing type declarations for web builds if needed
import { htmlPrerender } from 'vite-plugin-html-prerender'

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
  // Your base path remains '/' since you are pointing directly to achaiawood.com
  base: '/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://achaiawood.com',
    }),
    htmlPrerender({
      staticDir: path.join(__dirname, 'dist'),
      // Tell it to render the main landing page
      routes: ['/'], 
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
