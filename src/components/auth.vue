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
        <svg class="icon-logo-vikinger">
          <use xlink:href="#svg-logo-vikinger"></use>
        </svg>
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
        Новое поколение социальной сети и сообщества! Общайтесь с друзьями и
        играйте с нашей системой геймификации квестов и значков!
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
        <img
          class="form-box-decoration overflowing"
          src="img/landing/rocket.png"
          alt="rocket"
        />
        <!-- /FORM BOX DECORATION -->

        <!-- FORM BOX TITLE -->
        <h2 class="form-box-title">Авторизация</h2>
        <!-- /FORM BOX TITLE -->

        <!-- FORM -->
        <form class="form">
          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="login-username">Логин :</label>
                <input
                  type="text"
                  v-model="login.username"
                  id="login-username"
                  name="login_username"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="login-password">Пароль :</label>
                <input
                  type="password"
                  v-model="login.password"
                  id="login-password"
                  name="login_password"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row space-between">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- CHECKBOX WRAP -->
              <div class="checkbox-wrap">
                <input
                  type="checkbox"
                  id="login-remember"
                  name="login_remember"
                  v-model="login.remember"
                  checked
                />
                <!-- CHECKBOX BOX -->
                <div class="checkbox-box">
                  <!-- ICON CROSS -->
                  <svg class="icon-cross">
                    <use xlink:href="#svg-cross"></use>
                  </svg>
                  <!-- /ICON CROSS -->
                </div>
                <!-- /CHECKBOX BOX -->
                <label for="login-remember">Запомнить меня</label>
              </div>
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
                class="button medium secondary"
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
          <a class="social-link facebook" href="#">
            <!-- ICON FACEBOOK -->
            <svg class="icon-facebook">
              <use xlink:href="#svg-facebook"></use>
            </svg>
            <!-- /ICON FACEBOOK -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link twitter" href="#">
            <!-- ICON TWITTER -->
            <svg class="icon-twitter">
              <use xlink:href="#svg-twitter"></use>
            </svg>
            <!-- /ICON TWITTER -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link twitch" href="#">
            <!-- ICON TWITCH -->
            <svg class="icon-twitch">
              <use xlink:href="#svg-twitch"></use>
            </svg>
            <!-- /ICON TWITCH -->
          </a>
          <!-- /SOCIAL LINK -->

          <!-- SOCIAL LINK -->
          <a class="social-link youtube" href="#">
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
        <img
          class="form-box-decoration"
          src="img/landing/rocket.png"
          alt="rocket"
        />
        <!-- /FORM BOX DECORATION -->

        <!-- FORM BOX TITLE -->
        <h2 class="form-box-title">Регистрация</h2>
        <!-- /FORM BOX TITLE -->

        <!-- FORM -->
        <form class="form" action="javascript:void(0);">
          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="register-email">Номер телефона :</label>
                <input
                  :disabled="register.sms_sended"
                  v-model="register.username"
                  placeholder="89001234567"
                  type="text"
                  id="register-email"
                  name="register_email"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="register-password">Пароль :</label>
                <input
                pattern=""
                  v-model="register.password"
                  :disabled="register.sms_sended"
                  type="password"
                  id="register-password"
                  name="register_password"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- FORM INPUT -->
              <div class="form-input">
                <label for="register-password-repeat">Повторите пароль :</label>
                <input
                  :disabled="register.sms_sended"
                  v-model="register.re_password"
                  type="password"
                  id="register-password-repeat"
                  name="register_password_repeat"
                />
              </div>
              <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM ROW -->
          <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
              <!-- CHECKBOX WRAP -->
              <div class="checkbox-wrap">
                <input
                  type="checkbox"
                  id="register-newsletter"
                  name="register_newsletter"
                  v-model="register.accept_rules"
                  :disabled="register.sms_sended"
                />
                <!-- CHECKBOX BOX -->
                <div class="checkbox-box">
                  <!-- ICON CROSS -->
                  <svg class="icon-cross">
                    <use xlink:href="#svg-cross"></use>
                  </svg>
                  <!-- /ICON CROSS -->
                </div>
                <!-- /CHECKBOX BOX -->
                <label for="register-newsletter">Я принимаю условия</label>
              </div>
              <!-- /CHECKBOX WRAP -->
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
                @click="requestSms"
                :disabled="!canRegister || register.sms_sended"
                class="button medium primary"
              >
                Регистрация
              </button>
              <!-- /BUTTON -->
            </div>
            <!-- /FORM ITEM -->
          </div>
          <!-- /FORM ROW -->

          <!-- FORM TEXT -->
          <p class="form-text text-center " v-if="!register.sms_sended">
            Вы получите sms сообщение c кодом подтверждения.
          </p>
          <p class="form-text text-center " v-if="register.number_is_already">
            Номер уже зарегестрирован в системе, попробуйте войти
          </p>
          <!-- /FORM TEXT -->

          <!-- AFTER SMS SENDED -->
          <template v-if="register.sms_sended">
            <!-- FORM TEXT -->

            <!-- /FORM TEXT -->

            <!-- FORM ROW -->
            <div class="form-row">
              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input">
                  <label for="register-sms-confirm"
                    >Введите код из сообщения:</label
                  >
                  <input
                    v-model="register.sms_code"
                    type="password"
                    id="register-sms-confirm"
                  />
                </div>

                <div class="form-input">
                  <p class="form-text text-center ">
                    Время: {{ register.timer_sec }}сек.
                  </p>
                </div>
                <p
                  class="form-text text-center "
                  v-if="register.smsCodeInvalid"
                >
                  Смс код указан неверно, попробуйте еще раз.
                </p>
                <!-- /FORM INPUT -->
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
                  @click="confirmSms"
                  :disabled="!canConfirmSms"
                  class="button medium secondary"
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

  mounted() {
  
   

       this.$initForms();
    this.$initLanding();



  },
  data() {
    return {
      number_regex: /8\d{10}$/,
      password_regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      login: {
        username: "",
        password: "",
        remember: false,
        invalidCredentials: false,
        invalidCredentials_timout: false,
      },
      register: {
        username: "",
        password: "",
        re_password: "",
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
  },
  methods: {
    async requestSms(event) {
      console.log(this.$url + "/api/Account/Register");
      event.preventDefault();

      let respFromServ = null;

      await axios({
        method: "POST",
        url: this.$url + "/api/Account/Register",
        data: {
          phoneNumber: this.register.username,
          year: 20,
          password: this.register.password,
          passwordConfirm: this.register.re_password,
        },
      }).then(
        (responce) => {
          console.log("Успех", responce);

          this.register.sms_sended = true;
          this.setSmsCodeWaitingIntervel();
        },
        (err) => {
          console.log(err.response);
      
            this.$toast.open({
        message: err.response.data.title,
    type: 'error'


    }) 
        }
      );
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
          alert("Регистрация успешна!");
        })
        .catch((err) => {
          this.$toast.error('Неверный код подтверждения')
          console.log("ERROR CONFIRM SMS", err.message);


        });

      return;
    },

    async requestLogin(event) {
      console.log(this.$url + "/api/Account/Login");
      event.preventDefault();



 
        //         {
        //   "phoneNumber": "string",
        //   "password": "string",
        //   "rememberMe": true,
        //   "returnUrl": "string"
        // }
   await axios({
          method: "POST",
          url: this.$url + "/api/Account/Login",
          data: {
            phoneNumber: this.login.username,
            year: 20,
            password: this.login.password,
            rememberMe: this.login.remember,
            returnUrl: "",
          },
        }).then(result=>{
          console.log(result.data);
             alert("Вход успешный!");
        }).catch(err=>{
          this.$toast.error('Неверные данные')
        });
      

    }
 
  }
};
</script>
