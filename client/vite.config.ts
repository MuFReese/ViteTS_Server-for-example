import { defineConfig } from 'vite'


export default defineConfig({
  server: {
    port: 3000,
    open: true,
     watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})