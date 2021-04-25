<template>
  <div class="landing">
    <!-- LANDING DECORATION -->
    <div class="landing-decoration"></div>
    <!-- /LANDING DECORATION -->

    <!-- LANDING INFO -->
    <div class="landing-info">
      <!-- LOGO -->
      <div class="logo">
        <!-- ICON LOGO VIKINGER -->
        <img src="../assets/logo.png" style="width:30%" alt="" />
        <!-- /ICON LOGO VIKINGER -->
      </div>
      <!-- /LOGO -->

      <!-- LANDING INFO PRETITLE -->
      <h2 class="landing-info-pretitle">Добро Пожаловать</h2>
      <!-- /LANDING INFO PRETITLE -->

      <!-- LANDING INFO TITLE -->
      <h1 class="landing-info-title">VKaluge</h1>
      <!-- /LANDING INFO TITLE -->

      <!-- LANDING INFO TEXT -->
      <p class="landing-info-text">
        Новое поколение социальной сети и сообщества! Очень надеемся сделать из
        этого что-то годное и поднять на этом бабла
      </p>
      <!-- /LANDING INFO TEXT -->

      <!-- TAB SWITCH -->
      <div class="tab-switch">
        <!-- TAB SWITCH BUTTON -->
        <p class="tab-switch-button login-register-form-trigger">Войти</p>
        <!-- /TAB SWITCH BUTTON -->

        <!-- TAB SWITCH BUTTON -->
        <p class="tab-switch-button login-register-form-trigger">Регистрация</p>
        <!-- /TAB SWITCH BUTTON -->
      </div>
      <!-- /TAB SWITCH -->
    </div>
    <!-- /LANDING INFO -->

    <!-- LANDING FORM -->
    <div class="landing-form">
      <!-- FORM BOX -->
      <div class="form-box login-register-form-element">
        <!-- FORM BOX DECORATION -->

        <!-- /FORM BOX DECORATION -->

        <!-- FORM BOX TITLE -->
        <h2 class="form-box-title">Авторизация</h2>
        <!-- /FORM BOX TITLE -->

        <!-- FORM -->
        <form class="form">
          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->

            <vs-input
              style="width:100%"
              danger-text="Номер должен быть в формате 89xx1234567"
              :danger="
                !!login.username.length && !number_regex.test(login.username)
              "
              icon-no-border
              label-placeholder="Номер телефона"
              type="text"
              v-model.lazy="login.username"
              id="login-username"
              name="login_username"
            ></vs-input>
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->

            <vs-input
              style="width:100%"
              danger-text="Пароль долже сожержать заглавную, строчную буквы, цифры, и символ. "
              :danger="
                !!login.password.length && !password_regex.test(login.password)
              "
              label-placeholder="Пароль"
              type="password"
              v-model="login.password"
              id="login-password"
              name="login_password"
            ></vs-input>
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row space-between">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- CHECKBOX WRAP -->

              <vs-checkbox
                v-model="login.remember"
           
                >Запомнить меня</vs-checkbox
              >

              <!-- /CHECKBOX WRAP -->
            </div>
            <!-- /FORM ITEM -->

            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM LINK -->
              <!-- <a class="form-link" href="#">Забыли пароль?</a> -->
              <!-- /FORM LINK -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- BUTTON -->

              <button
                @click="requestLogin"
                class="button medium secondary vs-con-loading__container"
                :disabled="!canLogin"
              >
                Войти
              </button>
              <!-- /BUTTON -->
            </div>

            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->
        </form>
        <!-- /FORM -->

        <!-- LINED TEXT -->
        <p class="lined-text">Авторизация через</p>
        <!-- /LINED TEXT -->

        <!-- SOCIAL LINKS -->
        <div class="social-links">
          <!-- SOCIAL LINK -->
          <a class="social-link facebook">
            <!-- ICON FACEBOOK -->
            <svg class="icon-facebook">
              <use xlink:href="#svg-facebook"></use>
            </svg>
            <!-- /ICON FACEBOOK -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link twitter">
            <!-- ICON TWITTER -->
            <svg class="icon-twitter">
              <use xlink:href="#svg-twitter"></use>
            </svg>
            <!-- /ICON TWITTER -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link twitch">
            <!-- ICON TWITCH -->
            <svg class="icon-twitch">
              <use xlink:href="#svg-twitch"></use>
            </svg>
            <!-- /ICON TWITCH -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link youtube">
            <!-- ICON YOUTUBE -->
            <svg class="icon-youtube">
              <use xlink:href="#svg-youtube"></use>
            </svg>
            <!-- /ICON YOUTUBE -->
          </a>
          <!-- /SOCIAL LINK -->
        </div>
        <!-- /SOCIAL LINKS -->
      </div>
      <!-- /FORM BOX -->

      <!-- FORM BOX -->
      <div class="form-box login-register-form-element">
        <!-- FORM BOX DECORATION -->

        <!-- /FORM BOX DECORATION -->

        <!-- FORM BOX TITLE -->
        <h2 class="form-box-title">Регистрация</h2>
        <!-- /FORM BOX TITLE -->

        <!-- FORM -->
        <form class="form" action="javascript:void(0);">
          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->

            <vs-input
              style="width:100%"
              danger-text="Номер должен быть в формате 89xx1234567"
              :danger="
                !!register.username.length &&
                  !number_regex.test(register.username)
              "
              icon-no-border
              label-placeholder="Номер телефона"
              type="text"
              v-model.lazy="register.username"
              :disabled="register.sms_sended"
            ></vs-input>
          </div>
          <!-- FORM ROW -->
          <div class="form-row">
            <vs-input
              style="width:100%"
              danger-text="Пароль долже сожержать заглавную, строчную буквы, цифры, и символ. "
              :danger="
                !!register.password.length &&
                  !password_regex.test(register.password)
              "
              label-placeholder="Пароль"
              type="password"
              v-model="register.password"
              id="login-password"
              name="login_password"
              :disabled="register.sms_sended"
            ></vs-input>
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->

            <vs-input
              style="width:100%"
              danger-text="Пароль долже сожержать заглавную, строчную буквы, цифры, и символ. "
              :danger="
                !!register.re_password.length &&
                  !password_regex.test(register.re_password)
              "
              :disabled="register.sms_sended"
              label-placeholder="Пароль"
              type="password"
              v-model="register.re_password"
              id="login-password"
              name="login_password"
            ></vs-input>
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->

            <vs-tooltip text="Пока не понятно какие, но мы что-то придумаем">
              <vs-checkbox
                v-model="register.accept_rules"
                :disabled="register.sms_sended"
               
                >Принимаю условия</vs-checkbox
              >
            </vs-tooltip>
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- BUTTON -->

              <button
                @click="requestSms"
                :disabled="!canRegister || register.sms_sended"
                class="button medium primary vs-con-loading__container"
              >
                Регистрация
              </button>
              <!-- /BUTTON -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM TEXT -->
       
          <!-- /FORM TEXT -->

          <!-- AFTER SMS SENDED -->
          <template v-if="register.sms_sended">
            <!-- FORM TEXT -->

            <!-- /FORM TEXT -->

            <!-- FORM ROW -->
            <div class="form-row">
              <!-- FORM ITEM -->

              <vs-input
                style="width:100%"
                label-placeholder="Номер телефона"
                type="text"
                v-model.lazy="register.sms_code"
                id="login-username"
                name="login_username"
              ></vs-input>
            </div>

            <div class="form-input">
              <p class="form-text text-center ">
                Время: {{ register.timer_sec }}сек.
              </p>
            </div>

            <!-- /FORM INPUT -->

            <!-- /FORM ITEM -->

            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- BUTTON -->
                <button
                  @click="confirmSms"
                  :disabled="!canConfirmSms"
                  class="button medium secondary vs-con-loading__container"
                >
                  Подтвердить
                </button>
                <!-- /BUTTON -->
              </div>
              <!-- /FORM ITEM -->
            </div>

            <!-- /FORM ROW -->
          </template>
        </form>
        <!-- /FORM -->
      </div>
      <!-- /FORM BOX -->
    </div>
    <!-- /LANDING FORM -->


     
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "auth",
created(){
if(this.isLogged){
  this.$router.push({path:'/profile'})
}else{
  this.$emit('loaded')
}
},
  mounted() {
    this.$initForms();
    this.$initLanding();
  
    
 
  },
  data() {
    return {
      number_regex: /8\d{10}$/,
      password_regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      login: {
        username: "89201231212",
        password: "Aa123$",
        remember: false,
        invalidCredentials: false,
        invalidCredentials_timout: false,
      },
      register: {
        username: "89208868912",
        password: "Aa123$",
        re_password: "Aa123$",
        accept_rules: false,
        sms_code: "",
        sms_sended: false,
        timer: null,
        timer_sec: 60,
        number_is_already: false,
        smsCodeInvalid_timeout: false,
        smsCodeInvalid: false,

        number_is_already_timeout: false,
      },
    };
  },

  components: {},
  computed: {
    canLogin() {
      return !!(
        this.login.username.length &&
        this.number_regex.test(this.login.username) &&
        this.login.password.length &&
        this.password_regex.test(this.login.password)
      );
    },
    canRegister() {
      return (
        this.register.username.length &&
        this.number_regex.test(this.register.username) &&
        this.register.password.length &&
        this.password_regex.test(this.register.password) &&
        this.register.password == this.register.re_password &&
        this.register.accept_rules
      );
    },
    canConfirmSms() {
      return this.register.sms_code.length;
    },
    isLogged(){
      return this.$store.state.isLogged
    }
  },
  methods: {
    showLoading(element) {
      this.$vs.loading({
        background: "primary",
        color: "#fff",
        container: element,
        scale: 0.45,
      });
    },
    hideLoading(element) {
      this.$vs.loading.close(element);
    },
    async requestSms(event) {
      console.log(event.target);
      console.log(this.$url + "/api/Account/Register");
      // event.preventDefault();

      this.showLoading(event.target);
  

      await axios({
        method: "POST",
        url: this.$url + "/api/Account/Register",
        data: {
          phoneNumber: this.register.username,
          year: 20,
          password: this.register.password,
          passwordConfirm: this.register.re_password,
        },
      })
        .then(
          (responce) => {
            console.log("Успех", responce);

            this.register.sms_sended = true;
            this.setSmsCodeWaitingIntervel();
          },
          (err) => {
            console.log(err.response);

            this.showError(err.response.data.title);
          }
        )
        .then((z) => {
          this.hideLoading(event.target);
        });
      return;
    },
    setSmsCodeWaitingIntervel() {
      this.$nextTick(() => this.$initForms());
      this.register.timer_sec = 59;
      this.register.timer = setInterval(() => {
        this.register.timer_sec--;
        if (this.register.timer_sec == 0) {
          clearInterval(this.register.timer);
          this.register.sms_sended = false;
        }
      }, 1000);
    },
    async confirmSms(event) {
      event.preventDefault();
      this.showLoading(event.target);
      console.log(this.$url + "/api/Account/Register");
      console.log("Отправляемые данные: ", {
        smsCode: this.register.sms_code,
        year: 20,
        login: this.register.username,
        password: this.register.password,
      });

      await axios({
        method: "POST",
        url: this.$url + "/api/Account/Verificate",
        data: {
          smsCode: Number(this.register.sms_code),
          year: 20,
          login: this.register.username,
          password: this.register.password,
        },
      })
        .then(() => {
         this.$router.push({path: '/profile'})
        })
        .catch((err) => {
          this.showError("Неверный код подтверждения");

          console.log("ERROR CONFIRM SMS", err.message);
        })
        .finally(() => this.hideLoading(event.target));

      return;
    },

    async requestLogin(event) {
      console.log(this.$url + "/api/Account/Login");
      event.preventDefault();
this.showLoading(event.target)
      //         {
      //   "phoneNumber": "string",
      //   "password": "string",
      //   "rememberMe": true,
      //   "returnUrl": "string"
      // }
      this.$store.dispatch('tryLogin',{
          phoneNumber: this.login.username,
          year: 20,
          password: this.login.password,
          rememberMe: this.login.remember,
          returnUrl: "",
        })
    
        .then((result) => {
      
         
       

       this.$router.push({path:"/profile"})

        })
        .catch((err) => {
          this.showError("Неверные данные");
     
        }).finally(()=>{
          this.hideLoading(event.target)
        })
    },
    showError(text) {
      this.$vs.notify({ title: "Ошибка", text: text, color: "danger" });
    },
  },
  watch : {
  //   isLogged(n){
  //     if (n===null) return;
  //     if(n === false){
  // this.$router.push({path:'/profile'})
  //     }else{
  //  this.$emit("loaded")

  //     }
      
  //   }
  }
};
</script>
