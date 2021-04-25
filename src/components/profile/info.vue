<template>
  <div class="grid grid-3-6-3">
    <!-- GRID COLUMN -->
    <div class="grid-column">
      <!-- WIDGET BOX -->

      <!-- /WIDGET BOX -->

      <!-- WIDGET BOX -->
      <div class="widget-box">
        <!-- WIDGET BOX SETTINGS -->
        <div class="widget-box-settings">
          <!-- POST SETTINGS WRAP -->
          <div class="post-settings-wrap">
            <!-- POST SETTINGS -->
            <div
              class="post-settings widget-box-post-settings-dropdown-trigger"
            >
              <!-- POST SETTINGS ICON -->
              <svg class="post-settings-icon icon-more-dots">
                <use xlink:href="#svg-more-dots"></use>
              </svg>
              <!-- /POST SETTINGS ICON -->
            </div>
            <!-- /POST SETTINGS -->

            <!-- SIMPLE DROPDOWN -->
      
            <!-- /SIMPLE DROPDOWN -->
          </div>
          <!-- /POST SETTINGS WRAP -->
        </div>
        <!-- /WIDGET BOX SETTINGS -->

        <!-- WIDGET BOX TITLE -->
        <p class="widget-box-title">Персональная информация</p>
        <!-- /WIDGET BOX TITLE -->

        <!-- WIDGET BOX CONTENT -->
        <div class="widget-box-content">
          <!-- INFORMATION LINE LIST -->
          <div class="information-line-list">
            <!-- INFORMATION LINE -->
            <div class="information-line">
              <!-- INFORMATION LINE TITLE -->
              <p class="information-line-title">Номер</p>
              <!-- /INFORMATION LINE TITLE -->

              <!-- INFORMATION LINE TEXT -->
              <p class="information-line-text">{{ user.phoneNumber }}</p>
              <!-- /INFORMATION LINE TEXT -->
            </div>
            <!-- /INFORMATION LINE -->

            <!-- INFORMATION LINE -->
            <div class="information-line">
              <!-- INFORMATION LINE TITLE -->
              <p class="information-line-title">Последняя активность</p>
              <!-- /INFORMATION LINE TITLE -->

              <!-- INFORMATION LINE TEXT -->
              <p class="information-line-text">
                {{ myLastActionWas }} секунд назад
              </p>
              <!-- /INFORMATION LINE TEXT -->
            </div>
            <!-- /INFORMATION LINE -->

            <!-- INFORMATION LINE -->
            <div class="information-line">
              <!-- INFORMATION LINE TITLE -->
              <p class="information-line-title">Город</p>
              <!-- /INFORMATION LINE TITLE -->

              <!-- INFORMATION LINE TEXT -->
              <p class="information-line-text">
                {{ user.city || "Не указан" }}
              </p>
              <!-- /INFORMATION LINE TEXT -->
            </div>
          </div>
          <!-- /INFORMATION LINE LIST -->
        </div>
        <!-- /WIDGET BOX CONTENT -->
      </div>
      <!-- /WIDGET BOX -->
    </div>
    <!-- /GRID COLUMN -->

    <!-- GRID COLUMN -->
    <div class="grid-column">
      <!-- WIDGET BOX -->
      <div class="widget-box">

    <vs-tooltip title='Их пока нет' text='Но мы что-то придумаем' position='left' color='red'>

  <p class="widget-box-title">Посты</p>
    </vs-tooltip>


      </div>
      <!-- /WIDGET BOX -->
    </div>
    <!-- /GRID COLUMN -->

    <!-- GRID COLUMN -->
    <div class="grid-column">
      <!-- WIDGET BOX -->

      <!-- /WIDGET BOX -->

      <!-- WIDGET BOX -->
      <div class="widget-box">
        <!-- WIDGET BOX SETTINGS -->
        <div class="widget-box-settings">
          <!-- POST SETTINGS WRAP -->
          <div class="post-settings-wrap">
            <!-- POST SETTINGS -->
            <div
              class="post-settings widget-box-post-settings-dropdown-trigger"
            >
              <!-- POST SETTINGS ICON -->
              <svg class="post-settings-icon icon-more-dots">
                <use xlink:href="#svg-more-dots"></use>
              </svg>
              <!-- /POST SETTINGS ICON -->
            </div>
            <!-- /POST SETTINGS -->

            <!-- SIMPLE DROPDOWN -->
         
            <!-- /SIMPLE DROPDOWN -->
          </div>
          <!-- /POST SETTINGS WRAP -->
        </div>
        <!-- /WIDGET BOX SETTINGS -->

        <!-- WIDGET BOX TITLE -->
        <p class="widget-box-title">More Stats</p>
        <!-- /WIDGET BOX TITLE -->

        <!-- WIDGET BOX CONTENT -->
        <div class="widget-box-content">
          <!-- STAT BLOCK LIST -->
          <div class="stat-block-list">
            <!-- STAT BLOCK -->
            <div class="stat-block">
              <!-- STAT BLOCK DECORATION -->
              <div class="stat-block-decoration">
                <!-- STAT BLOCK DECORATION ICON -->
                <svg class="stat-block-decoration-icon icon-friend">
                  <use xlink:href="#svg-friend"></use>
                </svg>
                <!-- /STAT BLOCK DECORATION ICON -->
              </div>
              <!-- /STAT BLOCK DECORATION -->

              <!-- STAT BLOCK INFO -->
              <div class="stat-block-info">
                <!-- STAT BLOCK TITLE -->
                <p class="stat-block-title">Last friend added</p>
                <!-- /STAT BLOCK TITLE -->

                <!-- STAT BLOCK TEXT -->
                <p class="stat-block-text">5 Days Ago</p>
                <!-- /STAT BLOCK TEXT -->
              </div>
              <!-- /STAT BLOCK INFO -->
            </div>
            <!-- /STAT BLOCK -->

            <!-- STAT BLOCK -->
            <div class="stat-block">
              <!-- STAT BLOCK DECORATION -->
              <div class="stat-block-decoration">
                <!-- STAT BLOCK DECORATION ICON -->
                <svg class="stat-block-decoration-icon icon-status">
                  <use xlink:href="#svg-status"></use>
                </svg>
                <!-- /STAT BLOCK DECORATION ICON -->
              </div>
              <!-- /STAT BLOCK DECORATION -->

              <!-- STAT BLOCK INFO -->
              <div class="stat-block-info">
                <!-- STAT BLOCK TITLE -->
                <p class="stat-block-title">Last post update</p>
                <!-- /STAT BLOCK TITLE -->

                <!-- STAT BLOCK TEXT -->
                <p class="stat-block-text">1 Day Ago</p>
                <!-- /STAT BLOCK TEXT -->
              </div>
              <!-- /STAT BLOCK INFO -->
            </div>
            <!-- /STAT BLOCK -->

            <!-- STAT BLOCK -->
            <div class="stat-block">
              <!-- STAT BLOCK DECORATION -->
              <div class="stat-block-decoration">
                <!-- STAT BLOCK DECORATION ICON -->
                <svg class="stat-block-decoration-icon icon-comment">
                  <use xlink:href="#svg-comment"></use>
                </svg>
                <!-- /STAT BLOCK DECORATION ICON -->
              </div>
              <!-- /STAT BLOCK DECORATION -->

              <!-- STAT BLOCK INFO -->
              <div class="stat-block-info">
                <!-- STAT BLOCK TITLE -->
                <p class="stat-block-title">Most commented post</p>
                <!-- /STAT BLOCK TITLE -->

                <!-- STAT BLOCK TEXT -->
                <p class="stat-block-text">56 Comments</p>
                <!-- /STAT BLOCK TEXT -->
              </div>
              <!-- /STAT BLOCK INFO -->
            </div>
            <!-- /STAT BLOCK -->

            <!-- STAT BLOCK -->
            <div class="stat-block">
              <!-- STAT BLOCK DECORATION -->
              <div class="stat-block-decoration">
                <!-- STAT BLOCK DECORATION ICON -->
                <svg class="stat-block-decoration-icon icon-thumbs-up">
                  <use xlink:href="#svg-thumbs-up"></use>
                </svg>
                <!-- /STAT BLOCK DECORATION ICON -->
              </div>
              <!-- /STAT BLOCK DECORATION -->

              <!-- STAT BLOCK INFO -->
              <div class="stat-block-info">
                <!-- STAT BLOCK TITLE -->
                <p class="stat-block-title">Most liked post</p>
                <!-- /STAT BLOCK TITLE -->

                <!-- STAT BLOCK TEXT -->
                <p class="stat-block-text">904 Likes</p>
                <!-- /STAT BLOCK TEXT -->
              </div>
              <!-- /STAT BLOCK INFO -->
            </div>
            <!-- /STAT BLOCK -->
          </div>
          <!-- /STAT BLOCK LIST -->
        </div>
        <!-- /WIDGET BOX CONTENT -->
      </div>
      <!-- /WIDGET BOX -->
    </div>
    <!-- /GRID COLUMN -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
this.$store.commit('setLoader', false)
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
     myLastActionWas(){
      let dateNow = new Date();
let dateWas = new Date(this.user.lastAction);




      return Math.abs((dateNow - dateWas)/1000);
    }
  },
};
</script>
