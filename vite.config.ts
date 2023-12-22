import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import 'src/assets/styles/_colors.scss';
          @import 'src/assets/styles/_typography.scss';
          @import 'src/assets/styles/_animations.scss';
        `,
      },
    },
  },
});
