import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/andrew-cummins-portfolio/',
  build: {
    outDir: 'dist',
  },
})
