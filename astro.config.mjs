// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Prévia no GitHub Pages. TODO: ao comprar o domínio definitivo,
  // trocar site pelo domínio, remover base e voltar outDir para 'dist'.
  site: 'https://abalduinojose-cmd.github.io',
  base: '/jessica',
  outDir: 'docs',
  integrations: [sitemap()],
  server: { port: 5188 },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
