import Vue from "vue";
import store from "./store.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const auth = () => import("./components/auth.vue");
const profile = () => import("./components/profile.vue");

const test = () => import("./components/test.vue");
const editMe = () => import("./components/profile/edit.vue");
const myInfo = () => import("./components/profile/info.vue");

const routes = [
  { path: "/auth", component: auth },
  {
    path: "/profile",
    component: profile,
    children: [
      { path: "info", component: myInfo },
      { path: "edit", component: editMe },

      { path: "*", redirect: "/info" },
    ],
  },

  { path: "/test", component: test },
  { path: "*", redirect: "/profile" },
];

const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});

router.beforeEach(async (to, from, next) => {
  if (from.path === to.path) {
    next(false);
    return;
  }
  console.log(`FROM ${from.path} TO ${to.path}`);
  if (store.state.isLogged === null) {
    next();
    return;
  }
  if (to.path != "/auth" && store.state.isLogged === false)
    next({ path: "/auth" });
  else if (to.path == "/auth" && store.state.isLogged) {
    next({ path: "/profile" });
  } else next();
});

export default router;
