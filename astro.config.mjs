import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://clavosyalambres.com.ar',
  integrations: [
    sitemap(),
    react(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
