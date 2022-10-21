import chooseArea from "./src/index.vue";
import { App } from "vue";

//组件可以使用app.use的方式使用
export default {
  install(app: App) {
    //全局注册组件
    app.component("m-choose-area", chooseArea);
  },
};
