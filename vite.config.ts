import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path' 
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

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
  // 1. CHANGED TO '/' FOR CUSTOM DOMAINS:
  base: '/', 

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

  // 2. MULTI-PAGE PATHS: Explicitly map your HTML files here
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Explicitly list any other subpages here if they exist as separate files:
        // about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
