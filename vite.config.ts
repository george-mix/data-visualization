import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/data-visualization/',
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression(),
  ],
});
