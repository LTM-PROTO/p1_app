import { createRouter, createWebHashHistory } from "vue-router";

const routesP = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/pc/indexVue.vue"),
  },
];
const routesM = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/moblie/indexVue.vue"),
  },
];
var routes = [];
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  routes = routesM;
} else {
  routes = routesP;
}
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
