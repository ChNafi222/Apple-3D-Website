import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
    // Use a conditional base path to handle both local development and production deployment
    base: mode === 'production' ? '/' : '/',
  }
});
