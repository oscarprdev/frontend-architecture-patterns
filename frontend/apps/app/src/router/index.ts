import { createRouter, createWebHistory } from 'vue-router'
import {
  flightsMenuItem,
  inboundFlightsComponent,
  outboundFlightsComponent,
} from '@frontend-app/flights'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/flights/inbound',
    },
    {
      path: flightsMenuItem.path,
      component: flightsMenuItem.component,
      redirect: '/flights/inbound',
      children: [
        { path: 'inbound', component: inboundFlightsComponent },
        { path: 'outbound', component: outboundFlightsComponent },
      ],
    },
  ],
})

export default router
