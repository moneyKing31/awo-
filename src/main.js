import Vue from "vue";
import App from "./App.vue";
import { Field } from "vant";
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Field);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
