import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faHome, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { far, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, faHeart, faHome, faEllipsisH);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
