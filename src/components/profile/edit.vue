<template>
  <div class="account-hub-content my-3">
    <!-- SECTION HEADER -->
    <div class="section-header">
      <!-- SECTION HEADER INFO -->
      <div class="section-header-info">
        <!-- SECTION PRETITLE -->
        <p class="section-pretitle">Мой профиль</p>
        <!-- /SECTION PRETITLE -->

        <!-- SECTION TITLE -->
        <h2 class="section-title">Информация</h2>
        <!-- /SECTION TITLE -->
      </div>
      <!-- /SECTION HEADER INFO -->
    </div>
    <!-- /SECTION HEADER -->

    <!-- GRID COLUMN -->
    <div class="grid-column">
      <!-- GRID -->
      <div class="grid grid-3-3-3 centered">
        <!-- USER PREVIEW -->
        <div class="user-preview small fixed-height">
          <!-- USER PREVIEW COVER -->
          <figure
            class="user-preview-cover liquid"
            style='background: url("img/cover/01.jpg") center center / cover no-repeat;'
          >
            <img src="img/cover/01.jpg" alt="cover-01" style="display: none;" />
          </figure>
          <!-- /USER PREVIEW COVER -->

          <!-- USER PREVIEW INFO -->
          <div class="user-preview-info">
            <!-- USER SHORT DESCRIPTION -->
            <div class="user-short-description small">
              <!-- USER SHORT DESCRIPTION AVATAR -->
              <div class="user-short-description-avatar user-avatar">
                <!-- USER AVATAR BORDER -->
                <div class="user-avatar-border">
                  <!-- HEXAGON -->
                  <div
                    class="hexagon-100-110"
                    style="width: 100px; height: 110px; position: relative;"
                  >
                    <canvas
                      width="100"
                      height="110"
                      style="position: absolute; top: 0px; left: 0px;"
                    ></canvas>
                  </div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR BORDER -->

                <!-- USER AVATAR CONTENT -->
                <div class="user-avatar-content">
                  <!-- HEXAGON -->
                  <div
                    class="hexagon-image-68-74"
                    data-src="img/avatar/01.jpg"
                    style="width: 68px; height: 74px; position: relative;"
                  >
                    <canvas
                      width="68"
                      height="74"
                      style="position: absolute; top: 0px; left: 0px;"
                    ></canvas>
                  </div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR CONTENT -->

                <!-- USER AVATAR PROGRESS -->
                <div class="user-avatar-progress">
                  <!-- HEXAGON -->
                  <div
                    class="hexagon-progress-84-92"
                    style="width: 84px; height: 92px; position: relative;"
                  >
                    <canvas
                      width="84"
                      height="92"
                      style="position: absolute; top: 0px; left: 0px;"
                    ></canvas>
                  </div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR PROGRESS -->

                <!-- USER AVATAR PROGRESS BORDER -->
                <div class="user-avatar-progress-border">
                  <!-- HEXAGON -->
                  <div
                    class="hexagon-border-84-92"
                    style="width: 84px; height: 92px; position: relative;"
                  >
                    <canvas
                      width="84"
                      height="92"
                      style="position: absolute; top: 0px; left: 0px;"
                    ></canvas>
                  </div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR PROGRESS BORDER -->

                <!-- USER AVATAR BADGE -->
                <div class="user-avatar-badge">
                  <!-- USER AVATAR BADGE BORDER -->
                  <div class="user-avatar-badge-border">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-28-32"
                      style="width: 28px; height: 32px; position: relative;"
                    >
                      <canvas
                        width="28"
                        height="32"
                        style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR BADGE BORDER -->

                  <!-- USER AVATAR BADGE CONTENT -->
                  <div class="user-avatar-badge-content">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-dark-22-24"
                      style="width: 22px; height: 24px; position: relative;"
                    >
                      <canvas
                        width="22"
                        height="24"
                        style="position: absolute; top: 0px; left: 0px;"
                      ></canvas>
                    </div>
                    <!-- /HEXAGON -->
                  </div>
                  <!-- /USER AVATAR BADGE CONTENT -->

                  <!-- USER AVATAR BADGE TEXT -->
                  <p class="user-avatar-badge-text">24</p>
                  <!-- /USER AVATAR BADGE TEXT -->
                </div>
                <!-- /USER AVATAR BADGE -->
              </div>
              <!-- /USER SHORT DESCRIPTION AVATAR -->
            </div>
            <!-- /USER SHORT DESCRIPTION -->
          </div>
          <!-- /USER PREVIEW INFO -->
        </div>
        <!-- /USER PREVIEW -->

        <!-- UPLOAD BOX -->
        <div class="upload-box">
          <!-- UPLOAD BOX ICON -->
          <svg class="upload-box-icon icon-members">
            <use xlink:href="#svg-members"></use>
          </svg>
          <!-- /UPLOAD BOX ICON -->

          <!-- UPLOAD BOX TITLE -->
          <p class="upload-box-title">Change Avatar</p>
          <!-- /UPLOAD BOX TITLE -->

          <!-- UPLOAD BOX TEXT -->
          <p class="upload-box-text">110x110px size minimum</p>
          <!-- /UPLOAD BOX TEXT -->
        </div>
        <!-- /UPLOAD BOX -->

        <!-- UPLOAD BOX -->
        <div class="upload-box">
          <!-- UPLOAD BOX ICON -->
          <svg class="upload-box-icon icon-photos">
            <use xlink:href="#svg-photos"></use>
          </svg>
          <!-- /UPLOAD BOX ICON -->

          <!-- UPLOAD BOX TITLE -->
          <p class="upload-box-title">Change Cover</p>
          <!-- /UPLOAD BOX TITLE -->

          <!-- UPLOAD BOX TEXT -->
          <p class="upload-box-text">1184x300px size minimum</p>
          <!-- /UPLOAD BOX TEXT -->
        </div>
        <!-- /UPLOAD BOX -->
      </div>
      <!-- /GRID -->

      <!-- WIDGET BOX -->
      <div class="widget-box">
        <!-- WIDGET BOX CONTENT -->
        <div class="widget-box-content">
          <!-- FORM -->
          <form class="form">
            <!-- FORM ROW -->
            <div class="form-row split">
              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input small active">
                  <vs-input
                    label-placeholder="Имя"
                    danger-text="Имя должно быть из одного слова"
                    :danger="
                      !!localUser.firstName.length &&
                        !oneWordRegx.test(localUser.firstName)
                    "
                    v-model="localUser.firstName"
                    style="width:100%"
                  ></vs-input>
                </div>
                <!-- /FORM INPUT -->
              </div>
              <!-- /FORM ITEM -->

              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input small active">
                  <vs-input
                    danger-text="Фамилия должна быть из одного слова"
                    :danger="
                      !!localUser.lastName.length && !oneWordRegx.test(localUser.lastName)
                    "
                    label-placeholder="Фамилия"
                    v-model="localUser.lastName"
                    style="width:100%"
                  ></vs-input>
                </div>
                <!-- /FORM INPUT -->
              </div>
              <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row split">
              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input small full">
                  <vs-input
                  type='text'
                    danger-text="Введите корректный возраст"
                    :danger="localUser.age < 0 || isNaN(Number(localUser.age))"
                    label-placeholder="Возраст"
                    v-model="localUser.age"
                    style="width:100%"
                  ></vs-input>
                </div>
                <!-- /FORM INPUT -->
              </div>
              <!-- /FORM ITEM -->

              <!-- FORM ITEM -->
              <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input small active">
                  <vs-input
                    v-model="localUser.city"
                    danger-text="Город должен быть из одного слова "
                    :danger="!!localUser.city.length && !oneWordRegx.test(localUser.city)"
                    label-placeholder="Город"
                    style="width:100%"
                  ></vs-input>
                </div>
                <!-- /FORM INPUT -->

                <!-- /FORM INPUT -->
              </div>
              <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <div class="form-row">
              <button
                :disabled="!canSave"
                @click='editMe'
                class="button large secondary vs-con-loading__container"
              >
                Сохранить
              </button>
            </div>
          </form>
          <!-- /FORM -->
        </div>
        <!-- WIDGET BOX CONTENT -->
      </div>
      <!-- /WIDGET BOX -->
    </div>
    <!-- /GRID COLUMN -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      oneWordRegx: /^[А-Яа-яA-Za-z]+$/,
      localUser: {
        firstName: "",
        lastName: "",
        city: "",
        age: 0,
      },
    };
  },
  mounted() {
    this.$store.commit("setLoader", false);
    this.loadUserFromStore()
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
    editMe(event) {
        
      event.preventDefault();
      this.showLoading(event.target);

      this.$store.dispatch("editMe", this.localUser)
      
      .then(()=>{
          this.$vs.notify({text:"Данные обновлены"})
      })
      .catch((err)=>{
          console.log(err)
          this.$vs.notify({text:"Ошибка обновлены", title:"Ошибка", color:'red'})
      }).finally(()=>{
             this.hideLoading(event.target);
      })
      ;
    },
    loadUserFromStore(){

    for (let prop in this.localUser) {
     this.user[prop] && (this.localUser[prop] = this.user[prop]);
    }

      // BUG FROM BACKEND
    this.localUser.age = this.user.year

    },


  
  },
  computed: {
    canSave() {
      return (
        this.oneWordRegx.test(this.localUser.firstName) &&
        this.oneWordRegx.test(this.localUser.lastName) &&
        this.oneWordRegx.test(this.localUser.city) &&
        !isNaN(Number(this.localUser.age))
      )
    },
    user(){
        return this.$store.state.user
    },

  },
watch: {
    user(){
        this.loadUserFromStore();
    }
}
};
</script>

<style></style>
