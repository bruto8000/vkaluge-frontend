<template>
  <vs-input
    style="width:100%"
    danger-text="Пароль должен сожержать заглавную, строчную буквы, цифры, и символ. Минимум 6 символов."
    :danger="!!valueFromPatent.length && !password_regex.test(valueFromPatent)"
    :label-placeholder="label || 'Пароль'"
    type="password"
    :disabled='disabled'
    v-model="valueFromPatent"
  ></vs-input>
</template>

<script>
export default {
  props: ["value",'disabled','label'],
  mounted() {
    this.valueFromPatent = this.value;
  },
  data() {
    return {
      valueFromPatent: "",
      number_regex: /8\d{10}$/,
      password_regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    };
  },
  computed: {},
  watch: {
    value(n) {
      this.valueFromPatent = n;
    },
    valueFromPatent(n) {
      if (this.valueFromPatent != this.value) {
        this.$emit("update:value", n);
      }
    },
  },
};
</script>

<style></style>
