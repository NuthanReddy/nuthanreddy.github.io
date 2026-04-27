import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://nuthanreddy.dev",
  integrations: [sitemap()],

  vite: {
    css: {
      postcss: "./postcss.config.cjs",
    },
  },

  adapter: cloudflare(),
});