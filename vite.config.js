import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases — use @/ instead of ../../
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,          // disable in prod for smaller output
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Split vendor libs into a separate chunk for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router':       ['react-router-dom'],
          'charts':       ['recharts'],
          'pdf':          ['jspdf', 'jspdf-autotable'],
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },

  preview: {
    port: 4173,
    strictPort: false,
  },
})
