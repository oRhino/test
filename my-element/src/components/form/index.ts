import form from './src/index.vue';
import { App } from 'vue';

//组件可以使用app.use的方式使用
export default {
  install(app: App) {
    app.component('m-form', form);
  },
};
