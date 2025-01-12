import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/scroll.js',
      name: 'ScrollJs',
      fileName: (format) => `scrolljs.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [], 
      output: {
        globals: {
        },
      },
    },
  },
});