<template>
    <div>





<vs-row vs-w='12' vs-justify="center">
    <vs-col vs-w="6"  >
    <forminput name=' '></forminput>
    </vs-col>


</vs-row>
<vs-row vs-w="12" vs-justify='center'>
    <vs-col vs-w="6">
        <vs-input      style="width:100%"
      
      danger-text="The password does not meet the standards"
      label-placeholder="Логин" :danger='false' icon='sms' ></vs-input>
    </vs-col>
</vs-row>

<sidebar></sidebar>
    </div>

</template>

<script>
import forminput from "./formInput"
import sidebar from "./every/sidebar"
export default {

mounted(){
this.$store.commit('setLoader',false)
},
components:{
    forminput,
    sidebar
}
}
</script>

<style>

</style>