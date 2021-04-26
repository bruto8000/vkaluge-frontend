<template>
  <vs-sidebar v-model="valueFromParent" parent="body" position-right='right'>
    <div class="dropdown-navigation header-settings-dropdown">
      <!-- DROPDOWN NAVIGATION HEADER -->
      <div class="dropdown-navigation-header" slot="header">
        <!-- USER STATUS -->
        <div class="user-status">
          <!-- USER STATUS AVATAR -->
          <a class="user-status-avatar" href="profile-timeline.html">
            <!-- USER AVATAR -->
            <div class="user-avatar small no-outline">
              <!-- USER AVATAR CONTENT -->
              <div class="user-avatar-content">
                <!-- HEXAGON -->
                <div
                  class="hexagon-image-30-32"
                  data-src="img/avatar/01.jpg"
                ></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR CONTENT -->

              <!-- USER AVATAR PROGRESS -->
              <div class="user-avatar-progress">
                <!-- HEXAGON -->
                <div class="hexagon-progress-40-44"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS -->

              <!-- USER AVATAR PROGRESS BORDER -->
              <div class="user-avatar-progress-border">
                <!-- HEXAGON -->
                <div class="hexagon-border-40-44"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS BORDER -->

              <!-- USER AVATAR BADGE -->
              <div class="user-avatar-badge">
                <!-- USER AVATAR BADGE BORDER -->
                <div class="user-avatar-badge-border">
                  <!-- HEXAGON -->
                  <div class="hexagon-22-24"></div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR BADGE BORDER -->

                <!-- USER AVATAR BADGE CONTENT -->
                <div class="user-avatar-badge-content">
                  <!-- HEXAGON -->
                  <div class="hexagon-dark-16-18"></div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR BADGE CONTENT -->

                <!-- USER AVATAR BADGE TEXT -->
                <p class="user-avatar-badge-text">24</p>
                <!-- /USER AVATAR BADGE TEXT -->
              </div>
              <!-- /USER AVATAR BADGE -->
            </div>
            <!-- /USER AVATAR -->
          </a>
          <!-- /USER STATUS AVATAR -->

          <!-- USER STATUS TITLE -->
          <p class="user-status-title">
            <span class="bold">Привет {{ user.username }}</span>
          </p>
          <!-- /USER STATUS TITLE -->

          <!-- USER STATUS TEXT -->
          <p class="user-status-text small">
            <a href="profile-timeline.html">{{ user.phoneNumber }}</a>
          </p>
          <!-- /USER STATUS TEXT -->
        </div>
        <!-- /USER STATUS -->
      </div>
      <!-- /DROPDOWN NAVIGATION HEADER -->

      <!-- DROPDOWN NAVIGATION CATEGORY -->
      <p class="dropdown-navigation-category">Мой профиль</p>
      <!-- /DROPDOWN NAVIGATION CATEGORY -->

      <!-- DROPDOWN NAVIGATION LINK -->
      <a class="dropdown-navigation-link" @click="goTo('/profile/info')">
        <svg class="menu-item-link-icon icon-members m-1">
          <use xlink:href="#svg-members"></use>
        </svg>
        Информация</a
      >
      <!-- /DROPDOWN NAVIGATION LINK -->

      <!-- DROPDOWN NAVIGATION LINK -->
      <a class="dropdown-navigation-link" @click="goTo('/profile/edit')">
        <svg class="menu-item-link-icon icon-members m-1">
          <use xlink:href="#svg-pinned"></use>
        </svg>
        Редактирование</a
      >
      <!-- /DROPDOWN NAVIGATION LINK -->

      <!-- DROPDOWN NAVIGATION LINK -->

      <!-- /DROPDOWN NAVIGATION LINK -->

      <!-- DROPDOWN NAVIGATION BUTTON -->
      <p
        @click="logout"
        class="dropdown-navigation-button button small secondary vs-con-loading__container"
      >
        Выход
      </p>
      <!-- /DROPDOWN NAVIGATION BUTTON -->
    </div>
  </vs-sidebar>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      timeForFixBug: 0,
    };
  },
  mounted() {},
  watch: {
    value(n) {
      if (n) {
        this.timeForFixBug = 1;
        setTimeout(() => {
          this.timeForFixBug = 0;
        }, 200);
      }
    },
  },
  computed: {
    valueFromParent: {
      get() {
        return this.value;
      },
      set(n) {
        if (this.timeForFixBug) return;

        console.log("setted", n);
        this.$emit("update:value", n);
      },
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    goTo(path) {
      console.log("goto");
      this.valueFromParent = false;

      if (path != this.$route.path) {
        this.$router.push({ path: path });
      }
    },
    logout(event) {
      this.showLoading(event.target);
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$vs.notify({ title: "Вы вышли из системы" });
          document.querySelectorAll(".vs-content-sidebar").forEach((el) => {
            el.remove();
          });
          this.$router.push({ path: "/auth" });
        })
        .finally(() => {
          this.hideLoading(event.target);
        });
    },

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
  },
};
</script>

<style></style>
