import { createRouter, createWebHistory } from 'vue-router'
import {
  flightsMenuItem,
  inboundFlightsComponent,
  outboundFlightsComponent,
} from '@frontend-app/flights'
import { hotelsMenuItem } from '@frontend-app/hotels'

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
    {
      path: hotelsMenuItem.path,
      component: hotelsMenuItem.component,
    },
  ],
})

export default router
