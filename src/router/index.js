import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/home/tsr_home.vue"
      ),
  },
  {
    path: "/functions",
    name: "function",
    component: () =>
      import(
        /* webpackChunkName: "function" */ "../views/functions/tsr_functions.vue"
      ),
  },
  {
    path: "/resources",
    name: "resource",
    component: () =>
      import(
        /* webpackChunkName: "resource" */ "../views/resources/tsr_resources.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/about/tsr_about.vue"
      ),
  },
  {
    path: "/set",
    name: "set",
    component: () =>
      import(/* webpackChunkName: "set" */ "../views/set/tsr_set.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
