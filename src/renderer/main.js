import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import vClickOutside from 'v-click-outside';
import Chartist from 'chartist';
import 'es6-promise/auto';
import App from './App';
import router from './router';
import store from './store';
import GlobalComponents from '../gloablComponents';
import Notifications from '../components/UIComponents/NotificationPlugin';
import SideBar from '../components/UIComponents/SidebarPlugin';

// plugin setup
Vue.use(VueRouter);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);
Vue.use(App);

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
