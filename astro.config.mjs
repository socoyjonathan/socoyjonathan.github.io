// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://socoyjonathan.github.io", // site tells Astro the canonical URL
  base: "/", // base: "/" is correct for username.github.io
  output: "static", // output: "static" ensures GitHub Pages compatibility
});

