<template>
    <vs-input      style="width:100%"
         danger-text="Номер должен быть в формате 89xx1234567"
      :danger='!!value.length && !number_regex.test(value)'
      icon-no-border 
      label-placeholder="Номер телефона"

       type="text"
                  v-model.lazy="value"
                  id="login-username"
                  name="login_username"
      
      ></vs-input>
</template>

<script>
export default {
props: ['value'],
data(){
    return {
          number_regex: /8\d{10}$/
    }
}
}
</script>

<style>

</style>