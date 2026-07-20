import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hardcoding the repository name ensures Vite links all CSS and JS files perfectly
export default defineConfig({
  plugins: [react()],
  base: '/figma-react-site/', // 👈 Wrap your exact GitHub repository name in slashes
})
