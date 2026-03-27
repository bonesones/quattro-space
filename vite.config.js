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
      svgo: {
        plugins: [
          {
            name: "cleanupIds",
            params: {
              prefix: "icon-"
            }
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,

    manifest: true,

    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        shale: resolve(__dirname, "shale.html"),
        business: resolve(__dirname, "business.html"),
        404: resolve(__dirname, "404.html"),
        kitchen: resolve(__dirname, "kitchen.html")
      },
      output: {
        entryFileNames: "js/[name].[hash].js",
        chunkFileNames: "js/[name].[hash].js",
        assetFileNames: assetInfo => {
          if (assetInfo.name.endsWith(".css")) {
            return "css/[name].[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return "images/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        }
      }
    }
  },

  server: {
    open: true
  }
});
