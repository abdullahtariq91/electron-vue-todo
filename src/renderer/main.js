import Vue from 'vue';
import axios from 'axios';
// remove later
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.css';

import VueRouter from 'vue-router';
import vClickOutside from 'v-click-outside';
import Chartist from 'chartist';
import 'bootstrap/dist/css/bootstrap.css';
import 'es6-promise/auto';

import App from './App';
import router from './router';
import store from './store';

// Plugins
import GlobalComponents from '../gloablComponents';
import Notifications from '../components/UIComponents/NotificationPlugin';
import SideBar from '../components/UIComponents/SidebarPlugin';
// import App from './App'

// router setup
// import routes from './routes/routes'

// library imports


import '../assets/sass/paper-dashboard.scss';

// plugin setup
Vue.use(VueRouter);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// Vue.use(Vuetify);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist;
  },
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  data: {
    Chartist,
  },
  template: '<App/>',
}).$mount('#app');
