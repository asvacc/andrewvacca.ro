import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ContactView = () => import('../views/ContactView.vue')
const PortfolioView = () => import('../views/PortfolioView.vue')
const ResumeView = () => import('../views/ResumeView.vue')


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
  ],
})

export default router
