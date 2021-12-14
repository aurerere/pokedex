import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login')
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register')
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: () => import('../views/pokemon')
  },
  {
    path: "/me",
    name: "Profile",
    component: () => import('../views/me')
  },
  {
    path: "/:pathMatch(.*)*",
    name: '404',
    component: () => import('../views/404')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
