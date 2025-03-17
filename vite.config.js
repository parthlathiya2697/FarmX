import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['modern-farming.parthlathiya.wiki'],
  },
  preview: {
    allowedHosts: ['modern-farming.parthlathiya.wiki', 'farmx.parthlathiya.wiki'],
  },
}); 