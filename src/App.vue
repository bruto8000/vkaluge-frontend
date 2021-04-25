<template>
  <div id="app">
    <page-loader :show="isNeedLoader"></page-loader>
    <router-view v-if="isLogged !== null" @loaded="turnOffLoader"></router-view>

  </div>
</template>

<script>
import pageLoader from "./components/pageLoader.vue";
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
  
    };
  },

  created() {
    this.turnOnLoader();

    this.$store.dispatch("tryAuth").then((isLogged) => {
      console.log('app is mexavor')
      if (!isLogged) this.$router.replace({ path: "/auth" });
      this.$store.commit("setLogged", isLogged);
    });

    this.$router.beforeEach((to, from, next) => {
      this.turnOnLoader();

      setTimeout(() => {
        next();
      }, 500);
    });
  },
  mounted() {},
  computed: {
  
    isLogged() {
      return this.$store.state.isLogged;
    },
        isNeedLoader(){
         return this.$store.state.isNeedLoader;
    }
  },
  methods: {
    turnOffLoader() {
            this.$store.commit('setLoader', false)
      // this.isNeedLoader = false;
    },
    turnOnLoader() {
      this.$store.commit('setLoader', true)
      // this.isNeedLoader = true;
    },
  },
  components: {
    pageLoader,
  },
  watch: {
    isNeedLoader() {
 
    },
  },
  updated() {
    console.log("updatedApp");
    this.$initLiquidify();
    this.$initGlobalHexagons();
  },
};
</script>

<style></style>
