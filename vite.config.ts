import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
// @ts-ignore
import vitePrerender from 'vite-plugin-prerender'

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
    vitePrerender({
      // The absolute path to the vite-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Routes to render into static HTML files
      routes: ['/'], 
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
