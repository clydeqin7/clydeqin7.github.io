import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  css: {
    postcss: './postcss.config.js',
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
