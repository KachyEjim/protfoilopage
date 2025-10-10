import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/movic-tech/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    host: '0.0.0.0',
    cors: true,
    strictPort: true,
    hmr: {
      clientPort: 443, // for ngrok HTTPS
    },
    allowedHosts: ['6c022b3d74a3.ngrok-free.app'], // Explicitly allow ngrok host
  },
});
