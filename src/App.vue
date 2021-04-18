<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  
  },
  created(){
    this.$router.push({ path: 'auth' })
  },
  methods: {
    
  }
};
</script>

<style></style>
