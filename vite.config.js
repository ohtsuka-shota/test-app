import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'AWS-Quiz-App',
        short_name: 'AWS-Quiz-App',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3f51b5',
        icons: [
          {
            src: 'PWA-icon/aws-icon.svg',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
