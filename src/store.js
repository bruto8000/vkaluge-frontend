import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);


const checkLoggin =  () => {
  let isLogged = null;
  return axios
    .get("/api/Home/Index")
    .then((z) => {

    return true;
    })
    .catch((z) => {

      return false;
    });

};

const store = new Vuex.Store({
  state: {
    isLogged: null,
  },
  mutations: {
    setLogged: function(state, logged) {
  
      state.isLogged = !!logged;
    },
  },
  actions: {
  async  checkLogged(context) {
if(context.state.isLogged !== null){
    return context.state.isLogged
}else{

    let isLogged = await checkLoggin();

    context.commit('setLogged', isLogged)
 return   isLogged

}
     

    },
  },
  getters: {},
  plugins: []
});

export default store;
