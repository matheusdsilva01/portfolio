import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
const ASSET_URL = process.env.ASSET_URL || "/portfolio";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: []
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/client"),
      components: `${path.resolve(__dirname, "./src/client/components/")}`,
      assets: `${path.resolve(__dirname, "./src/client/assets/")}`
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: "build"
  },
  base: ASSET_URL
});
