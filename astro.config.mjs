import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sharp from "astro/assets/services/sharp";

export default defineConfig({
  base: "/site/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  image: {
    service: sharp,
  },
  build: {
    outDir: './docs',
  }
});
