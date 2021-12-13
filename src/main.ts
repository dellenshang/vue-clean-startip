import { createApp } from 'vue'
import router from '@/router'

import { store, key } from '@/store'
import SvgIcon from './components/svg-icon/index.vue'
import App from './App.vue'
const app = createApp(App)
app.use(router).use(store, key).component('svg-icon', SvgIcon).mount('#app')
