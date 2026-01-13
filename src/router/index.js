import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ConfiguratorView from '../views/ConfiguratorView.vue';
import SuccessView from '../views/SuccessView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/configurator/:step', component: ConfiguratorView, props: true },
    { path: '/success', component: SuccessView }
  ]
});