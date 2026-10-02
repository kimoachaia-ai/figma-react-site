import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path' // 1. Added for multi-page paths
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) { // Added type for TypeScript
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // 2. REQUIRED FOR GITHUB PAGES: Tells Vite where the site lives
  base: '/figma-react-site/', 

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // 3. REQUIRED FOR MULTI-PAGE SITES: Tells Vite to compile pages other than index.html
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add your other pages here. Examples:
        // about: resolve(__dirname, 'about.html'),
        // contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
