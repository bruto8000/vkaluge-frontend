<template>
  <nav
    v-if="screen == 'desktop'"
    id="navigation-widget"
    class="navigation-widget navigation-widget-desktop sidebar left hidden"
    data-simplebar="init"
    style="height: 721px;"
  >
    <div class="simplebar-wrapper" style="margin: 0px 0px -40px;">
      <div class="simplebar-height-auto-observer-wrapper">
        <div class="simplebar-height-auto-observer"></div>
      </div>
      <div class="simplebar-mask">
        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
          <div
            class="simplebar-content-wrapper"
            style="height: 100%; overflow: hidden scroll;"
          >
            <div class="simplebar-content" style="padding: 0px 0px 40px;">
              <!-- NAVIGATION WIDGET COVER -->
              <figure
                class="navigation-widget-cover liquid"
                style='background: url("img/cover/01.jpg") center center / cover no-repeat;'
              >
                <img
                  src="img/cover/01.jpg"
                  alt="cover-01"
                  style="display: none;"
                />
              </figure>
              <!-- /NAVIGATION WIDGET COVER -->

              <!-- USER SHORT DESCRIPTION -->
              <div class="user-short-description">
                <!-- USER SHORT DESCRIPTION AVATAR -->
                <a
                  class="user-short-description-avatar user-avatar medium"
                  href="profile-timeline.html"
                >
                  <!-- USER AVATAR BORDER -->
                  <div class="user-avatar-border">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-120-132"
                      style="width: 120px; height: 132px; position: relative;"
                    >
                      <canvas
                        width="120"
                        height="132"
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
                      class="hexagon-image-82-90"
                      data-src="img/avatar/01.jpg"
                      style="width: 82px; height: 90px; position: relative;"
                    >
                      <canvas
                        width="82"
                        height="90"
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
                      class="hexagon-progress-100-110"
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
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-border-100-110"
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
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div
                        class="hexagon-32-36"
                        style="width: 32px; height: 36px; position: relative;"
                      >
                        <canvas
                          width="32"
                          height="36"
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
                        class="hexagon-dark-26-28"
                        style="width: 26px; height: 28px; position: relative;"
                      >
                        <canvas
                          width="26"
                          height="28"
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
                </a>
                <!-- /USER SHORT DESCRIPTION AVATAR -->

                <!-- USER SHORT DESCRIPTION TITLE -->
                <p class="user-short-description-title">
                  <a>{{ `${user.firstName} ${user.lastName}` }}</a>
                </p>
                <!-- /USER SHORT DESCRIPTION TITLE -->

                <!-- USER SHORT DESCRIPTION TEXT -->
                <p class="user-short-description-text">
                  <a>VKALUGE.RU</a>
                </p>
                <!-- /USER SHORT DESCRIPTION TEXT -->
              </div>
              <!-- /USER SHORT DESCRIPTION -->

              <!-- USER STATS -->
              <div class="user-stats">
                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">930</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">Записи</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">82</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">друзья</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">5.7k</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">рейтинг</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->
              </div>
              <!-- /USER STATS -->

              <!-- MENU -->
              <ul class="menu">
                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-newsfeed">
                      <use xlink:href="#svg-newsfeed"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Профиль
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary" href="overview.html">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-overview">
                      <use xlink:href="#svg-overview"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Друзья
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-group">
                      <use xlink:href="#svg-group"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Сообщения
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-members">
                      <use xlink:href="#svg-members"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Фотографии
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-badges">
                      <use xlink:href="#svg-badges"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Анонимный чат
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-quests">
                      <use xlink:href="#svg-quests"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Видеочат рулетка
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->
              </ul>
              <!-- /MENU -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="simplebar-placeholder"
        style="width: auto; height: 1019px;"
      ></div>
    </div>
    <div
      class="simplebar-track simplebar-horizontal"
      style="visibility: hidden;"
    >
      <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
    </div>
    <div
      class="simplebar-track simplebar-vertical"
      style="visibility: visible;"
    >
      <div
        class="simplebar-scrollbar"
        style="height: 510px; display: block; transform: translate3d(0px, 0px, 0px);"
      ></div>
    </div>
  </nav>

  <nav
    v-else
    id="navigation-widget-mobile"
    class="navigation-widget navigation-widget-mobile sidebar left hidden"
    data-simplebar
    style="z-index : 10002"
  > 

      <!-- NAVIGATION WIDGET CLOSE BUTTON -->
    <div class="navigation-widget-close-button">
      <!-- NAVIGATION WIDGET CLOSE BUTTON ICON -->
      <svg class="navigation-widget-close-button-icon icon-back-arrow">
        <use xlink:href="#svg-back-arrow"></use>
      </svg>
      <!-- NAVIGATION WIDGET CLOSE BUTTON ICON -->
    </div>
    <!-- /NAVIGATION WIDGET CLOSE BUTTON -->
    <div class="simplebar-wrapper" style="margin: 0px 0px -40px;">
      <div class="simplebar-height-auto-observer-wrapper">
        <div class="simplebar-height-auto-observer"></div>
      </div>
      <div class="simplebar-mask">
        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
          <div
            class="simplebar-content-wrapper"
            style="height: 100%; overflow: hidden scroll;"
          >
            <div class="simplebar-content" style="padding: 0px 0px 40px;">
              <!-- NAVIGATION WIDGET COVER -->
              <figure
                class="navigation-widget-cover liquid"
                style='background: url("img/cover/01.jpg") center center / cover no-repeat;'
              >
                <img
                  src="img/cover/01.jpg"
                  alt="cover-01"
                  style="display: none;"
                />
              </figure>
              <!-- /NAVIGATION WIDGET COVER -->

              <!-- USER SHORT DESCRIPTION -->
              <div class="user-short-description">
                <!-- USER SHORT DESCRIPTION AVATAR -->
                <a
                  class="user-short-description-avatar user-avatar medium"
                  href="profile-timeline.html"
                >
                  <!-- USER AVATAR BORDER -->
                  <div class="user-avatar-border">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-120-132"
                      style="width: 120px; height: 132px; position: relative;"
                    >
                      <canvas
                        width="120"
                        height="132"
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
                      class="hexagon-image-82-90"
                      data-src="img/avatar/01.jpg"
                      style="width: 82px; height: 90px; position: relative;"
                    >
                      <canvas
                        width="82"
                        height="90"
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
                      class="hexagon-progress-100-110"
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
                  <!-- /USER AVATAR PROGRESS -->

                  <!-- USER AVATAR PROGRESS BORDER -->
                  <div class="user-avatar-progress-border">
                    <!-- HEXAGON -->
                    <div
                      class="hexagon-border-100-110"
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
                  <!-- /USER AVATAR PROGRESS BORDER -->

                  <!-- USER AVATAR BADGE -->
                  <div class="user-avatar-badge">
                    <!-- USER AVATAR BADGE BORDER -->
                    <div class="user-avatar-badge-border">
                      <!-- HEXAGON -->
                      <div
                        class="hexagon-32-36"
                        style="width: 32px; height: 36px; position: relative;"
                      >
                        <canvas
                          width="32"
                          height="36"
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
                        class="hexagon-dark-26-28"
                        style="width: 26px; height: 28px; position: relative;"
                      >
                        <canvas
                          width="26"
                          height="28"
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
                </a>
                <!-- /USER SHORT DESCRIPTION AVATAR -->

                <!-- USER SHORT DESCRIPTION TITLE -->
                <p class="user-short-description-title">
                  <a>{{ `${user.firstName} ${user.lastName}` }}</a>
                </p>
                <!-- /USER SHORT DESCRIPTION TITLE -->

                <!-- USER SHORT DESCRIPTION TEXT -->
                <p class="user-short-description-text">
                  <a>VKALUGE.RU</a>
                </p>
                <!-- /USER SHORT DESCRIPTION TEXT -->
              </div>
              <!-- /USER SHORT DESCRIPTION -->

              <!-- USER STATS -->
              <div class="user-stats">
                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">930</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">Записи</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">82</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">друзья</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat">
                  <!-- USER STAT TITLE -->
                  <p class="user-stat-title">5.7k</p>
                  <!-- /USER STAT TITLE -->

                  <!-- USER STAT TEXT -->
                  <p class="user-stat-text">рейтинг</p>
                  <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->
              </div>
              <!-- /USER STATS -->

              <!-- MENU -->
              <ul class="menu">
                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-newsfeed">
                      <use xlink:href="#svg-newsfeed"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Профиль
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary" >
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-overview">
                      <use xlink:href="#svg-overview"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Друзья
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-group">
                      <use xlink:href="#svg-group"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Сообщения
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-members">
                      <use xlink:href="#svg-members"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Фотографии
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-badges">
                      <use xlink:href="#svg-badges"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Анонимный чат
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->

                <!-- MENU ITEM -->
                <li class="menu-item">
                  <!-- MENU ITEM LINK -->
                  <a class="menu-item-link is-clickable link-secondary">
                    <!-- MENU ITEM LINK ICON -->
                    <svg class="menu-item-link-icon icon-quests">
                      <use xlink:href="#svg-quests"></use>
                    </svg>
                    <!-- /MENU ITEM LINK ICON -->
                    Видеочат рулетка
                  </a>
                  <!-- /MENU ITEM LINK -->
                </li>
                <!-- /MENU ITEM -->
              </ul>
              <!-- /MENU -->
            </div>
          </div>
        </div>
      </div>
      <div
        class="simplebar-placeholder"
        style="width: auto; height: 1019px;"
      ></div>
    </div>
    <div
      class="simplebar-track simplebar-horizontal"
      style="visibility: hidden;"
    >
      <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
    </div>
    <div
      class="simplebar-track simplebar-vertical"
      style="visibility: visible;"
    >
      <div
        class="simplebar-scrollbar"
        style="height: 510px; display: block; transform: translate3d(0px, 0px, 0px);"
      ></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["screen"],
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
