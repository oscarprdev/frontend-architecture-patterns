import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.provide(DefaultApolloClient, apolloClient)
app.use(router)
app.mount('#app')
