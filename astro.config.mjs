import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "kysely-planetscale": "/node_modules/kysely-planetscale/dist/index.mjs",
      },
    },
  },
});
