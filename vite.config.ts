import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  // GitHub Pages ke liye base path set karna zaroori hai
  base: '/RaheeCardsNew/', 
})
