import "./public-path.js";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index.js";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// @ts-ignore
let app;

// @ts-ignore
const render = (container) => {
  app = createApp(App);
  app
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
};

const initQianKun = () => {
  renderWithQiankun(
    // @ts-ignore
    {
      mount(props) {
        const { container } = props;
        render(container);
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
