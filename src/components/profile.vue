<template>
  <div id="profile">

<header-part></header-part>
    <!-- CONTENT GRID -->
    <div class="content-grid">
      <!-- PROFILE HEADER -->
      <div class="profile-header">
        <!-- PROFILE HEADER COVER -->
        <figure class="profile-header-cover liquid">
          <img src="img/cover/01.jpg" alt="cover-01" />
        </figure>
        <!-- /PROFILE HEADER COVER -->

        <!-- PROFILE HEADER INFO -->
        <div class="profile-header-info">
          <!-- USER SHORT DESCRIPTION -->
          <div class="user-short-description big">
            <!-- USER SHORT DESCRIPTION AVATAR -->
            <a
              class="user-short-description-avatar user-avatar big"
              href="profile-timeline.html"
            >
              <!-- USER AVATAR BORDER -->
              <div class="user-avatar-border">
                <!-- HEXAGON -->
                <div class="hexagon-148-164"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR BORDER -->

              <!-- USER AVATAR CONTENT -->
              <div class="user-avatar-content">
                <!-- HEXAGON -->
                <div
                  class="hexagon-image-100-110"
                  data-src="img/avatar/01.jpg"
                ></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR CONTENT -->

              <!-- USER AVATAR PROGRESS -->
              <div class="user-avatar-progress">
                <!-- HEXAGON -->
                <div class="hexagon-progress-124-136"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS -->

              <!-- USER AVATAR PROGRESS BORDER -->
              <div class="user-avatar-progress-border">
                <!-- HEXAGON -->
                <div class="hexagon-border-124-136"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS BORDER -->

              <!-- USER AVATAR BADGE -->
              <div class="user-avatar-badge">
                <!-- USER AVATAR BADGE BORDER -->
                <div class="user-avatar-badge-border">
                  <!-- HEXAGON -->
                  <div class="hexagon-40-44"></div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR BADGE BORDER -->

                <!-- USER AVATAR BADGE CONTENT -->
                <div class="user-avatar-badge-content">
                  <!-- HEXAGON -->
                  <div class="hexagon-dark-32-34"></div>
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

            <!-- USER SHORT DESCRIPTION AVATAR -->
            <a
              class="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium"
              href="profile-timeline.html"
            >
              <!-- USER AVATAR BORDER -->
              <div class="user-avatar-border">
                <!-- HEXAGON -->
                <div class="hexagon-120-132"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR BORDER -->

              <!-- USER AVATAR CONTENT -->
              <div class="user-avatar-content">
                <!-- HEXAGON -->
                <div
                  class="hexagon-image-82-90"
                  data-src="img/avatar/01.jpg"
                ></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR CONTENT -->

              <!-- USER AVATAR PROGRESS -->
              <div class="user-avatar-progress">
                <!-- HEXAGON -->
                <div class="hexagon-progress-100-110"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS -->

              <!-- USER AVATAR PROGRESS BORDER -->
              <div class="user-avatar-progress-border">
                <!-- HEXAGON -->
                <div class="hexagon-border-100-110"></div>
                <!-- /HEXAGON -->
              </div>
              <!-- /USER AVATAR PROGRESS BORDER -->

              <!-- USER AVATAR BADGE -->
              <div class="user-avatar-badge">
                <!-- USER AVATAR BADGE BORDER -->
                <div class="user-avatar-badge-border">
                  <!-- HEXAGON -->
                  <div class="hexagon-32-36"></div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR BADGE BORDER -->

                <!-- USER AVATAR BADGE CONTENT -->
                <div class="user-avatar-badge-content">
                  <!-- HEXAGON -->
                  <div class="hexagon-dark-26-28"></div>
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
              <a href="profile-timeline.html"
                >{{ user.firstName }} {{ user.lastName }}</a
              >
            </p>
            <!-- /USER SHORT DESCRIPTION TITLE -->

            <!-- USER SHORT DESCRIPTION TEXT -->
            <p class="user-short-description-text">
              {{ user.city }}
            </p>
            <!-- /USER SHORT DESCRIPTION TEXT -->
          </div>
          <!-- /USER SHORT DESCRIPTION -->

          <!-- USER STATS -->
          <div class="user-stats">
            <!-- USER STAT -->
            <div class="user-stat big">
              <!-- USER STAT TITLE -->
              <p class="user-stat-title">930</p>
              <!-- /USER STAT TITLE -->

              <!-- USER STAT TEXT -->
              <p class="user-stat-text">posts</p>
              <!-- /USER STAT TEXT -->
            </div>
            <!-- /USER STAT -->

            <!-- USER STAT -->
            <div class="user-stat big">
              <!-- USER STAT TITLE -->
              <p class="user-stat-title">82</p>
              <!-- /USER STAT TITLE -->

              <!-- USER STAT TEXT -->
              <p class="user-stat-text">friends</p>
              <!-- /USER STAT TEXT -->
            </div>
            <!-- /USER STAT -->

            <!-- USER STAT -->
            <div class="user-stat big">
              <!-- USER STAT TITLE -->
              <p class="user-stat-title">5.7k</p>
              <!-- /USER STAT TITLE -->

              <!-- USER STAT TEXT -->
              <p class="user-stat-text">visits</p>
              <!-- /USER STAT TEXT -->
            </div>
            <!-- /USER STAT -->

            <!-- USER STAT -->
            <div class="user-stat big">
              <!-- USER STAT IMAGE -->
              <img
                class="user-stat-image"
                src="img/flag/usa.png"
                alt="flag-usa"
              />
              <!-- /USER STAT IMAGE -->

              <!-- USER STAT TEXT -->
              <p class="user-stat-text">usa</p>
              <!-- /USER STAT TEXT -->
            </div>
            <!-- /USER STAT -->
          </div>
          <!-- /USER STATS -->

          <!-- PROFILE HEADER INFO ACTIONS -->
          <div class="profile-header-info-actions">
            <!-- PROFILE HEADER INFO ACTION -->
            <p class="profile-header-info-action button secondary">
              <span class="hide-text-mobile">Add</span> Friend +
            </p>
            <!-- /PROFILE HEADER INFO ACTION -->

            <!-- PROFILE HEADER INFO ACTION -->
            <p class="profile-header-info-action button primary">
              <span class="hide-text-mobile">Send</span> Message
            </p>
            <!-- /PROFILE HEADER INFO ACTION -->
          </div>
          <!-- /PROFILE HEADER INFO ACTIONS -->
        </div>
        <!-- /PROFILE HEADER INFO -->
      </div>
      <!-- /PROFILE HEADER -->

      <!-- SECTION NAVIGATION -->
      <nav class="section-navigation">
        <!-- SECTION MENU -->
        <div id="section-navigation-slider" class="section-menu">
          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item active" href="profile-about.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-profile">
              <use xlink:href="#svg-profile"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">About</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-timeline.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-timeline">
              <use xlink:href="#svg-timeline"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Timeline</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-friends.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-friend">
              <use xlink:href="#svg-friend"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Friends</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-groups.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-group">
              <use xlink:href="#svg-group"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Groups</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-photos.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-photos">
              <use xlink:href="#svg-photos"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Photos</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-videos.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-videos">
              <use xlink:href="#svg-videos"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Videos</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-badges.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-badges">
              <use xlink:href="#svg-badges"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Badges</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-stream.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-streams">
              <use xlink:href="#svg-streams"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Streams</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-blog.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-blog-posts">
              <use xlink:href="#svg-blog-posts"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Blog</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-forum.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-forum">
              <use xlink:href="#svg-forum"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Forum</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->

          <!-- SECTION MENU ITEM -->
          <a class="section-menu-item" href="profile-store.html">
            <!-- SECTION MENU ITEM ICON -->
            <svg class="section-menu-item-icon icon-store">
              <use xlink:href="#svg-store"></use>
            </svg>
            <!-- /SECTION MENU ITEM ICON -->

            <!-- SECTION MENU ITEM TEXT -->
            <p class="section-menu-item-text">Store</p>
            <!-- /SECTION MENU ITEM TEXT -->
          </a>
          <!-- /SECTION MENU ITEM -->
        </div>
        <!-- /SECTION MENU -->
      </nav>
      <!-- /SECTION NAVIGATION -->

      <!-- GRID -->
      <router-view> </router-view>


      <!-- /GRID -->
    </div>
    <!-- /CONTENT GRID -->


  </div>
</template>

<script>
import sidebarPart from "./sidebar-part.vue";
import headerPart from "./header"
export default {
  beforeRouteUpdate(to, from, next) {
    this.$emit("loaded");
    next();
  },
  data() {
    return {
      pageLoaderHidden: false,
      needSidebar: false,
    };
  },
  created() {
    console.log(this.$store);
    this.$store
      .dispatch("getMe")
      .then(() => {
        setTimeout(() => {
          this.$emit("loaded");
        }, 10);
      })
      .catch((err) => {});
  },
  mounted() {
    this.$initHeader();
    this.$initSidebar();
    this.$initLiquidify();
    this.$initGlobalHexagons();
    this.$initContent();
    this.$initForms();
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    myLastActionWas() {
      let dateNow = new Date();
      let dateWas = new Date(this.user.lastAction);

      return Math.abs((dateNow - dateWas) / 1000);
    },
  },
  components: {
    sidebarPart,
    headerPart
  },
};
</script>

<style></style>
