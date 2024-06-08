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
    coverage: {
      all: false,
      provider: 'v8',
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.d.ts'],
      reporter: ['lcov', 'html', 'text'],
      reportsDirectory: 'coverage',
      thresholds: {},
    },
  },
});
