import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [tailwindcss(),react()],
  css: {
    postcss: {},  // Vite tự động tìm postcss.config.js và tailwind.config.js
    devSourcemap: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8000,
  }
})
