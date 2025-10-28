// vite.config.js - Final Corrected File
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Alemu-portfolio/" // Keep this line!
})