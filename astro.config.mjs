import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import sharp from "astro/assets/services/sharp";
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  base: "/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  image: {
    service: sharp,
  },
  adapter: staticAdapter()
});
