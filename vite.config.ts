import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("app-vue", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 8089,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
