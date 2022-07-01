import Vue from "vue";
// import moment from 'moment'
import App from "./App.vue"; //根组件
import "bootstrap/dist/css/bootstrap.css"; // 默认找文件夹下的index文件(但是这个不是所以需要写路径)

Vue.config.productionTip = false;
Vue.filter('reverse1', (val) => {
  return val.toLocaleUpperCase()
})
new Vue({
  //实例化对象
  render: (h) => h(App), //渲染根应用
}).$mount("#app"); //渲染出代码挂载到index.html中app容器
