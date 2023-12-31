import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
    // port: 80,
    // host: 'amatitena.local',
  // },
  plugins: [
    react(),
    removeConsole(),
    qrcode(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '',
        },
      ],
    }),
  ],
})
