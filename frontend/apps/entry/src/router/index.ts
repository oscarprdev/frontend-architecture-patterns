import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/flights',
    },
    {
      path: '/flights',
      component: () => import('@frontend-app/flights').then(m => m.FlightsApp),
    },
  ],
})

export default router
