import { createRouter, createWebHistory } from 'vue-router';
import AdminPage from '../pages/admin/AdminPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import HomePage from '../pages/HomePage.vue';
import PricingPage from '../pages/PricingPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/admin', component: AdminPage },
  { path: '/register', component: RegisterPage },
  { path: '/pricing', component: PricingPage },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;