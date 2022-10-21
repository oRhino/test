import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import { App } from "vue";

const componments = [chooseArea, chooseIcon];

export default {
  install(app: App) {
    componments.map((item) => {
      app.use(item);
    });
  },
};
