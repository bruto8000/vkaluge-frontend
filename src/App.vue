<template>
  <div id="app">


      <page-loader :show="isNeedLoader"></page-loader>
    <router-view @loaded="turnOffLoader"></router-view>

  </div>
</template>

<script>
import pageLoader from "./components/pageLoader.vue" 
import axios from "axios"
export default {
  name: "App",
  components: {
  
  },
  data(){
return {
  isNeedLoader: true
}
  },
  
  created(){



    this.$router.beforeEach(async (to,from,next)=>{

      
  this.turnOnLoader();
  this.$forceUpdate();
setTimeout(() => {
    next();
    this.turnOffLoader();
  }, 500);


 

    })

   
  //  this.$router.push({ path: 'auth' })
  },
  methods: {
    log(a){
      console.log(a)
    }
  },
  mounted(){

  },
  methods:{
    turnOffLoader (){this.isNeedLoader = false } ,
    turnOnLoader (){  this.isNeedLoader = true}
    
  },
  components: {
    pageLoader
  },
  watch: {
    isNeedLoader(){
      console.log('changed')
    }
  },
  updated(){
    console.log('updated')
this.$initLiquidify()
 this.$initGlobalHexagons();
  }
};
</script>

<style></style>
