import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      'shreyasmh.onrender.com',
      'shreyasmh-portfolio.onrender.com',
    ],
  },

  preview: {
    allowedHosts: [
      'shreyasmh.onrender.com',
      'shreyasmh-portfolio.onrender.com',
    ],
  },
});
