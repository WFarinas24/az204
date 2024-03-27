import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  define: { _global: ({}), },
  server: {
    watch: {
      usePolling: true,
    },
  },
  base : '/az204'
})

