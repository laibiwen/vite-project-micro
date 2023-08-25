import "./public-path.js";
import { createApp, provide } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index.js";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// @ts-ignore
let app, $QK_CTX;

// @ts-ignore
const render = (container, props) => {
  app = createApp(App);
  app.provide("$QK_CTX", props);
  app.use(router).mount(container ? container.querySelector("#app") : "#app");
};

const initQianKun = () => {
  renderWithQiankun(
    // @ts-ignore
    {
      mount(props) {
        const { container } = props;
        render(container, props);
      },
      bootstrap() {},
      unmount() {
        // @ts-ignore
        app.unmount();
      },
    }
  );
};
// @ts-ignore
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();

// createApp(App).mount("#app");
