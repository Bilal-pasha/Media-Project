import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import nodejs from "@astrojs/node";

export default defineConfig({
  adapter: nodejs({
    mode: "middleware",
  }),
  output: "hybrid",
  integrations: [tailwind(), react({ experimentalReactChildren: true }), mdx()],
});
