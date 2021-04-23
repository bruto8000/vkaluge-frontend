import Vue from "vue";

Vue.prototype.$url = "";
import store from "./store.js";
import VueRouter from "vue-router";

import Vuesax from "vuesax";
import vuex from "vuex";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);
import App from "./App.vue";
import componentsList from "./globalComponentList.js";

Object.keys(componentsList).forEach((key) => {
  Vue.component(key, componentsList[key]);
});

Vue.use(VueRouter);
Vue.config.productionTip = false;


///GLOBAL COMPONENTS///
import app from "./initcomponents/utils/app.js";
import "./initcomponents/utils/svg-loader.js";
import "./initcomponents/form/form.utils.js";
import "./initcomponents/landing/landing.tabs.js";
import "./initcomponents/utils/liquidify.js";
import "./initcomponents/utils/page-loader.js";
import "./initcomponents/global/global.hexagons.js";
import "./initcomponents/global/global.tooltips.js";

import "./initcomponents/header/header.js";
import "./initcomponents/sidebar/sidebar.js";
import "./initcomponents/content/content.js";

// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
// Мы поговорим о вложенных маршрутах позднее.
import routes from "./routes.js";

// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});



router.beforeEach(async(to, from, next) => {
  console.log('start')
  let isLogged = await store.dispatch('checkLogged')
if(to.path !='/auth' && !isLogged) next({ path: '/auth' })
else{
  next()
}
 
console.log('end')


})
new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
