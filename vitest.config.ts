import { resolve } from 'node:path';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    dir: 'test',
    include: ['**/*.test.{ts,tsx}'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    environment: 'jsdom',
    testTimeout: 1000,
    setupFiles: ['test/setup.ts'],
    coverage: {
      all: false,
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/components/ui/*.{ts,tsx}', '**/*.test.{ts,tsx}', '**/*.d.ts'],
      reporter: ['lcov', 'html', 'text'],
      reportsDirectory: 'coverage',
      thresholds: {},
    },
  },
});
