<template>
  <div id="app">


      <page-loader :show="isNeedLoader"></page-loader>
    <router-view @loaded="turnOffLoader"></router-view>

  </div>
</template>

<script>
import pageLoader from "./components/pageLoader.vue" 

export default {
  name: "App",
  components: {
  
  },
  data(){
return {
  isNeedLoader: false
}
  },
  
  created(){
    this.$router.beforeEach((to,from,next)=>{
    //  this.turnOnLoader();
   this.$nextTick()
.then(z=>{
    next();
})
  

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
