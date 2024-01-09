import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import Category from './views/Category.vue';
import Product from './views/Product.vue';
import ProductDetails from './views/product/Details.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';

const routes = [
  {
    path: '/',
    component: About,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/product',
    component: Product,
    meta: { requiredAuth: true }
  },
  {
    path: '/product/:id',
    component: ProductDetails,
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
