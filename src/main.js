import './assets/css/style.css'

import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(register)
app.mount('#app')
