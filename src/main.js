import Vue from "vue";
import App from "./App.vue"; //根组件

Vue.config.productionTip = false;

new Vue({
  //实例化对象
  render: (h) => h(App), //渲染根应用
}).$mount("#app"); //渲染出代码挂载到index.html中app容器
