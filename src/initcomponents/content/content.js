/*-------------------
    CONTENT TABS
-------------------*/

import Vue from 'vue'
import app from '../utils/app.js'

Vue.prototype.$initContent = () =>{


app.plugins.createTab({
  triggers: '.tab-box-option',
  elements: '.tab-box-item'
});

/*------------------------
    CONTENT DROPDOWNS
------------------------*/
app.plugins.createDropdown({
  trigger: '.widget-box-post-settings-dropdown-trigger',
  container: '.widget-box-post-settings-dropdown',
  offset: {
    top: 30,
    right: 9
  },
  animation: {
    type: 'translate-top',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  }
});

app.plugins.createDropdown({
  trigger: '.reaction-item-dropdown-trigger',
  container: '.reaction-item-dropdown',
  triggerEvent: 'hover',
  offset: {
    bottom: 38,
    left: -16
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  }
});

app.plugins.createDropdown({
  trigger: '.reaction-options-dropdown-trigger',
  container: '.reaction-options-dropdown',
  triggerEvent: 'click',
  offset: {
    bottom: 54,
    left: -16
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 20
    }
  },
  closeOnDropdownClick: true
});

app.plugins.createDropdown({
  trigger: '.reaction-options-small-dropdown-trigger',
  container: '.reaction-options-small-dropdown',
  triggerEvent: 'click',
  offset: {
    bottom: 30,
    left: -80
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 16
    }
  },
  closeOnDropdownClick: true
});

app.plugins.createDropdown({
  trigger: '.post-settings-dropdown-trigger',
  container: '.post-settings-dropdown',
  offset: {
    bottom: 30,
    right: 0
  },
  animation: {
    type: 'translate-bottom',
    speed: .3,
    translateOffset: {
      vertical: 16
    }
  }
});

}