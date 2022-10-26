import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import trend from './trend';
import notification from './notification';
import list from './list';
import menu from './menu';
import chooseDate from './chooseDate';
import chooseTime from './chooseTime';
import { App } from 'vue';

const componments = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  chooseDate,
  chooseTime,
];

export default {
  install(app: App) {
    componments.map((item) => {
      app.use(item);
    });
  },
};
