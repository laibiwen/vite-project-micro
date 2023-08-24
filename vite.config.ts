import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "development" ? "/" : "/app-vue",
    build: {
      rollupOptions: {
        output: {},
      },
    },
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
      origin: "http://localhost:8089",
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
