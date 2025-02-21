// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bfhl': {
        target: 'https://bfhl-backend-3qpt6o65v-oms-projects-91a38b4d.vercel.app',
        changeOrigin: true,
      },
    },
  },
});
