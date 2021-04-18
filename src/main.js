import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false





///GLOBAL COMPONENTS///

import './initcomponents/form/form.utils.js'
import './initcomponents/utils/svg-loader.js'
import './initcomponents/landing/landing.tabs.js'



// 2. Определяем несколько маршрутов
// Каждый маршрут должен указывать на компонент.
// "Компонентом" может быть как конструктор компонента, созданный
// через `Vue.extend()`, так и просто объект с опциями компонента.
// Мы поговорим о вложенных маршрутах позднее.
import routes from './routes.js' 

 
// 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
// Вы можете передавать и дополнительные опции, но пока не будем усложнять.
const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
