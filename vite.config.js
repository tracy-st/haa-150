import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { watch } from 'vite-plugin-watch';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    watch({
      pattern: './content/**/*.{mdx,md}',
      command: 'pnpm run build-content',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'contentlayer/generated': '/.contentlayer/generated',
    },
  },
});
