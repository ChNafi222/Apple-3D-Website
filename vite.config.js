import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
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
      sourcemap: true
    },
    base: mode === 'production' ? '/Apple-3D-Website/' : '/',
  }
});
