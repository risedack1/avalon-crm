import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import viteImagemin from "vite-plugin-imagemin";
import { VitePluginFonts } from "vite-plugin-fonts";
import legacy from "@vitejs/plugin-legacy";
import StylelintPlugin from "vite-plugin-stylelint";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: "src/js/main.js",
          filename: "index.html",
          template: "index.html",
        },
      ],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
    VitePluginFonts({
      google: {
        preconnect: true,
        display: "swap",
        text: "ViteAwsom",
        injectTo: "head-prepend",
        families: [
          {
            name: "Roboto",
            styles: "wght@300;400;500;700",
            defer: true,
          },
        ],
      },
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    StylelintPlugin({
      files: ["src/scss/**/*.scss"],
    }),
    eslint({
      include: ["src/**/*.js"],
      exclude: ["node_modules/**", "dist/**"],
    }),
  ],
});
