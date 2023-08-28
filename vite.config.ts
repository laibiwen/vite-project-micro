import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import qiankun from "vite-plugin-qiankun";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "development" ? "/" : "/app-vue",
    build: {
      rollupOptions: {
        output: {},
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/styles/element/index.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
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
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
