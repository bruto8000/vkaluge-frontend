import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    isLogged: null,
    user: {
      accessFailedCount:'',
      check:'',
      city:'',
      concurrencyStamp:'',
      email:'',
      emailConfirmed:'',
      firstName:'',
      gender:'',
      id:'',
      isOnline:'',
      lastAction:'',
      lastName:'',
      lockoutEnabled:'',
      lockoutEnd:'',
      normalizedEmail:'',
      normalizedUserName:'',
      passwordHash:'',
      phoneNumber:'',
      phoneNumberConfirmed:'',
      securityStamp:'',
      status:'',
      twoFactorEnabled:'',
      userName:'',
      userProfile:'',
      year: ''
    },
    isNeedLoader: true,
  },
  mutations: {
    setLogged: function(state, logged) {
    
      state.isLogged = !!logged;
    },
    setMe(state, user){
      state.user = user

    },
    updateMe(state,user){

      for(let prop in user){
        state.user[prop] = user [prop]
      }
    },
    setLoader(state,need){
state.isNeedLoader = need;
    }
  },
  actions: {
    // async checkLogged(context) {
    //   if (context.state.isLogged !== null) {
    //     return context.state.isLogged;
    //   } else {
    //     let isLogged = await context.dispatch('tryAuth');

       
    //     return isLogged;
    //   }
    // },
    async getMe(context){
        await axios.get("/api/Profile/GetAuthoriseUser")
        .then(({data})=>{
context.commit('setMe',data);
console.log('getted from store')
return Promise.resolve()
        })
        .catch(err=>{
          console.log('NOTgetted from store')
          console.log(err);
          return Promise.reject()       
        })
    },
  async  tryAuth (context) {
      let isLogged = null;
      return axios
        .get("/api/Home/Index")
        .then((z) => {

          return true;
        })
        .catch((z) => {
     
          return false;
        });
    }
    ,
    async tryLogin(context,user){
console.log(user)
      await axios({
        method: "POST",
        url: "/api/Account/Login",
        data: user
      }).then((z)=>{
   
       context.commit('setLogged',true)
        return Promise.resolve(true);
      })

      .catch((err)=>{
        console.log(err)
        return Promise.reject(err);
      })

    },
    async editMe(context,user){
      await  axios({
        method: "POST",
        url:  "/api/Profile/ChangeInfo",
        data:user,
      }).then((data)=>{
        console.log(data)
        context.commit('updateMe', user)
        return Promise.resolve();
      })
      .catch((err)=>{
return Promise.reject(err);
      })
    },
    async logout(context){
      await axios({
        method: "POST",
        url: '/api/Account/Logout'

      }).then(()=>{
        context.commit('setLogged',false)
        return Promise.resolve()
      }).catch((err)=>{
        return Promise.reject(err)
      })
    }
  },
  getters: {},
  plugins: [],
});

export default store;
