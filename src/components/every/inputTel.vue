<template>
   <vs-input
              style="width:100%"
              danger-text="Номер должен быть в формате1 89xx1234567"
              :danger="
                !!valueFromPatent.length &&
                  !number_regex.test(valueFromPatent)
              "
                :disabled='disabled'
              icon-no-border
              label-placeholder="Номер телефона"
              type="text"
              @input='sik=true'
              @change='sik=true'
              v-model="valueFromPatent"
              
            ></vs-input>
</template>

<script>
export default {
props: ['value','disabled'],
mounted(){
this.valueFromPatent = this.value
},
data(){
    return {
        valueFromPatent: '',
              number_regex: /8\d{10}$/
    }
},
    computed : {
     
    },
    watch :{
        value(n){
            this.valueFromPatent = n
        },
        valueFromPatent(n){
 
if(this.valueFromPatent != this.value){
    this.$emit('update:value',n)
}
        }
    }

}
</script>

<style>

</style>