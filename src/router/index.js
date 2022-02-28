import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/AdminProducts.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
