import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Change this import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), // This now runs the native v4 compiler plugin
  ],
})
