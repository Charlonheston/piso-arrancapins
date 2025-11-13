import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://piso-arrancapins-valencia.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});

