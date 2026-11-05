import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 3000, host: '0.0.0.0' },
  build: {
    sourcemap: false,
    // Small inline assets bloat every prerendered page; keep images as files.
    assetsInlineLimit: 0,
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: { react: ['react', 'react-dom', 'react-router-dom'] },
          },
        },
  },
}));
