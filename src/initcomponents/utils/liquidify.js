import Vue from 'vue'
import app from '../utils/app.js'
Vue.prototype.$initLiquidify = () =>{

  app.querySelector('.liquid', function (images) {
    for (const image of images) {
      app.liquidify(image);
    }
  });

}

