import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import.meta.glob('@/assets/img/*.png')

const app = createApp(App)

app.use(router)

app.mount('#app')