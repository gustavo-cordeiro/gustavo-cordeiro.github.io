import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gustavo-cordeiro.github.io/',
  integrations: [mdx(), sitemap(), vue(), tailwind({
    applyBaseStyles: false,
  })]
});