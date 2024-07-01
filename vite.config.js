import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin'; // Ensure this import is correct

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      sentryVitePlugin({
        org: "devsidyll",
        project: "javascript-react"
      })
    ],
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'three-vendor': ['three'],
            'gsap-vendor': ['gsap'],
          },
        },
      },
    },
    base: mode === 'production' ? '/' : '/',
  }
});
