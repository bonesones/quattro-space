import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import svgSpritemap from "vite-plugin-svg-spritemap";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svgSpritemap({
      pattern: "src/assets/icons/*.svg",
      filename: "sprite.svg",
    }),
  ],

  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,

    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        contacts: resolve(__dirname, "contacts.html"),
      },
    },
  },
});
