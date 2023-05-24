
import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

// Vant pc适配
import '@vant/touch-emulator'

import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .use(i18n)

app.mount('#app')

