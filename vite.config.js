import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages under a repo path, set base: '/YOUR_REPO_NAME/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
