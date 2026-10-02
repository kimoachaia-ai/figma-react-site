import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap' // 1. Added the import

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
  base: '/', // Keep this as '/' for ://achaiawood.com

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
    // 2. Added the Sitemap plugin configuration
    Sitemap({
      hostname: 'https://achaiawood.com', 
      // If you are using React Router for other pages, add them here:
      // dynamicRoutes: ['/about', '/contact', '/gallery'] 
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
