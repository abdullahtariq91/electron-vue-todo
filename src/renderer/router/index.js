import Vue from 'vue';
import Router from 'vue-router';
import UserProfile from '../components/Dashboard/Views/UserProfile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'dashboard',
      component: require('@/components/Home').default,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: UserProfile,
        },
      ],
    },

    {
      path: '*',
      redirect: '/',
    },
  ],
});
