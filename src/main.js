let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
import Vue from "vue";
import App from "./App.vue";
import Find from "@/views/Find_.vue";
import My from "@/views/My_.vue";
import Part from "@/views/Part_.vue";
import NotFound from "@/views/NotFound_.vue";
import Ranking from "./views/Second/Ranking_.vue";
import Recommend from "./views/Second/Recommend_.vue";
import SongList from "./views/Second/SongList_.vue";
import wxllList from "./views/Second/wxl_1.vue";
import { Button } from "vant";
import { Popup, Cell, Form, Field } from "vant";

Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Cell);
Vue.use(Button);
//导入路由
import VueRouter from "vue-router";
//使用路由
Vue.use(VueRouter);
//创建路由规则
const routes = [
  // { path: "/find", name: "Find", component: Find },
  { path: "/my", name: "My", component: My },
  { path: "/part/:name", name: "Part", component: Part },
  // { path: "/part/:name", name: "Part", component: Part },
  { path: "*", component: NotFound },
  //重定向
  { path: "/", redirect: "/find" },
  //二级嵌套
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: "ranking",
        component: Ranking,
        children: [{ path: "wxll", component: wxllList }],
      },
      { path: "recommend", component: Recommend },
      { path: "songlist", component: SongList },
    ],
  },
];

//创建规则
const router = new VueRouter({
  routes,
});
//前置守卫
const islongin = false;
router.beforeEach((to, from, next) => {
  if (to.path === "/my" && !islongin) {
    alert("跳转失败");
    next(false);
  } else {
    next();
  }
});
Vue.config.productionTip = false;

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log("vm", vm);
