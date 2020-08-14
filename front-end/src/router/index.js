import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clientlist',
    name: 'ClientList',
    component: () => import(/* webpackChunkName: "clientlist" */ '../views/ClientList.vue')
  },
  {
    path: '/databaselist',
    name: 'DBList',
    component: () => import(/* webpackChunkName: "databaselist" */ '../views/DBList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
