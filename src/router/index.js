import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/aboutTeste.vue')
    },
    {
      path: '/info-media',
      name: 'info-media',
      component: () => import('@/views/InfoMedia.vue')
    },
    {
      path: '/searchMedia',
      name: 'searchMedia',
      component: () => import('@/views/searchedMedia.vue')
    }
  ]
})

export default router
