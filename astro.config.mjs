import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sharp from "astro/assets/services/sharp";

export default defineConfig({
  site: 'https://cherryyeditor.github.io',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: sharp,
  }
});
