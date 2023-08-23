import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

console.log(
  "qiankunWindow.__POWERED_BY_QIANKUN__",
  qiankunWindow.__POWERED_BY_QIANKUN__
);

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/"
  ),
  routes,
});

export default router;
