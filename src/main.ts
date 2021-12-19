import { createApp } from 'vue'
import router from '@/router'
import i18n from '@/i18n'
import { store, key } from '@/store'
import SvgIcon from 'async/svg-icon/index.vue'
import App from './App.vue'
// 等宽字体
import 'vfonts/FiraCode.css'
import './assets/styles/index.scss'

const app = createApp(App)
app.use(router).use(store, key).use(i18n).component('svg-icon', SvgIcon).mount('#app')
