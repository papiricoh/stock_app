import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
import StocksView from '../views/StocksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashBoardView
    },
    {
      path: '/stocks/',
      name: 'stocks',
      component: StocksView
    },
  ]
})

export default router
