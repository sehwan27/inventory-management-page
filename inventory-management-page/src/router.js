import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import Category from './views/Category.vue';
import Product from './views/Product.vue';
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/product',
    component: Product,
  },
  {
    path: '/category',
    component: Category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;