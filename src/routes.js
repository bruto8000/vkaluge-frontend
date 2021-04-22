



const auth = ()=>import('./components/auth.vue')
const  profile = () =>  import('./components/profile.vue')
const pravki = ()=>import( './components/pravki.vue')

const routes =  [
  { path: '/auth', component: auth },
  { path: '/profile', component: profile },
  { path: '/pravki', component: pravki }

]
export default routes
