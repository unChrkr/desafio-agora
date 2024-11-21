import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CarDetailsView from '@/views/CarDetailsView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/car/:id', name: 'CarDetails', component: CarDetailsView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
