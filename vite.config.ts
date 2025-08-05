import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
  server:{
    port: 8000
  },
  css: {
    devSourcemap : true
  },
  resolve : {
    alias : {
      src : path.resolve(__dirname,'./src')
    }
  }
})
