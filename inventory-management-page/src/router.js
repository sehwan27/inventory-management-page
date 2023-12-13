// src/router.js
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import Home from './views/Category.vue';
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
