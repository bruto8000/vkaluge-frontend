<template>
<div>
      <ul>
    <li style="margin:1rem" v-for="item in items" :key="item">
      {{ item }}
    </li>


  </ul>


<action-list-item></action-list-item>
</div>

</template>

<script>

import ActionListItem from './actionListItem.vue';

export default {
  data() {
    return {
      items: [
        "Сделать input маски/посказки",
        "Убрать галочку запомнить меня (сделать необязательным)",
        "Logout",
        "Кидать на главную страницу и пересмотреть роутинг",
        "Забыли пароль на авторизации",
      ],

    };
  },
  components: {


    ActionListItem,
  },
  mounted(){
         
  }
};
</script>

<style>



</style>
