// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: trocar pelo domínio definitivo quando o site for publicado
  site: 'https://jessicagroomer.com.br',
  integrations: [sitemap()],
  server: { port: 5188 },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
