import Vue from "vue"
import app from "../utils/app.js"



Vue.prototype.$initLanding = () =>{



   return   app.plugins.createTab({
    triggers: '.login-register-form-trigger',
    elements: '.login-register-form-element',
    animation: {
      type: 'slide-in-right',
      speed: 0.4
    },
    onTabChange: function (activeTab) {
      const firstInput = activeTab.querySelector('input');
  
      firstInput.focus();
    }
  });
}
