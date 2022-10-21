import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "./utils";
import mUI from "./components";

const app = createApp(App);
//全局注册组件
// for (const i in ElementPlusIconsVue) {
//   app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i]);
// }

//Object.entries传入一个对象,返回一个数组,数组的内容是该对象可枚举属性的键值对组成的数组 [[key1,bvalue],[key2,value]...]
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component);
}

app.use(router).use(ElementPlus).use(mUI);
app.mount("#app");
