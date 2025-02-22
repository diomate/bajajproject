import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Force Vite to use port 5173
    proxy: {
      '/bfhl': {
        target: 'http://localhost:3001',  // Updated to match new backend port
        changeOrigin: true,
      },
    },
  },
});
