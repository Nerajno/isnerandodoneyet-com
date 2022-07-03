import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Year2024 from '../views/Year2024.vue';
import Year2023 from '../views/Year2023.vue';
import Year2022 from '../views/Year2022.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2024',
    name: 'Year2024',
    component: Year2024
  },
  {
    path: '/2023',
    name: 'Year2023',
    component: Year2023
  },
  {
    path: '/2022',
    name: 'Year2022',
    component: Year2022
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
