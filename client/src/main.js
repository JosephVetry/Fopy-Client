// import './assets/main.css'
import Vue3Geolocation from 'vue3-geolocation';

import '../src/style.css'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(Vue3Geolocation);
app.use(pinia)
app.use(router)

app.mount('#app')
