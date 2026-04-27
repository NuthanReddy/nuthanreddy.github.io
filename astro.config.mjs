import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nuthanreddy.dev",
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: "./postcss.config.cjs",
    },
  },
});
