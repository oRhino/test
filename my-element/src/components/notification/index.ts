import { App } from 'vue';
import notification from './src/index.vue';

//组件可以使用app.use的方式使用
export default {
  install(app: App) {
    app.component('m-notification', notification);
  },
};
