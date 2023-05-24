import router from '@/router'
import axios from 'axios'
import { Toast } from 'vant'
import { HOST } from '@/utils/constants'
axios.defaults.timeout = 300 * 1000
axios.defaults.baseURL = HOST
const ENV = import.meta.env.MODE
// 跨域时需要携带cookie时
if (ENV !== 'token' && ENV !== 'jwt') axios.defaults.withCredentials = true

// 语言信息配置
export type lang = 'ja' | 'zh' | 'en'
type langMapType = {
  ja: 'ja-JP'
  zh: 'zh-CN'
  en: 'en-US'
}
const langMap: langMapType = {
  ja: 'ja-JP',
  zh: 'zh-CN',
  en: 'en-US'
}
if (!localStorage.getItem('Lang_Headers'))
  localStorage.setItem('Lang_Headers', 'ja')
const lang = localStorage.getItem('Lang_Headers') as lang
document.documentElement.lang = lang
// http 拦截器
axios.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem('LoginInfo')
    const language = langMap[lang]
    localStorage.setItem('Lang_Headers', language)
    if (config.headers) {
      config.headers['Accept-Language'] = language
      config.headers['X-Requested-With'] = 'XMLHttpRequest'
      if (auth) {
        config.headers.Authentication = auth
      }
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    // 登录中是跳页应跳过
    if (
      response.config.url === '/login' ||
      response.data.code === 0 ||
      /csv|pdf|octet/g.test(response.headers['content-type'])
    ) {
      return response
    }
    Toast(response.data.message)
    return Promise.reject(response)
  },
  (error) => {
    if (
      error.response.status === 408 ||
      error.response.status === 302 ||
      error.response.data.code === 401
    ) {
      router.push('/login')
      console.log(111123)
      localStorage.removeItem('LoginInfo')
      localStorage.removeItem('HadGetMenu')
      localStorage.removeItem('dynamicRoutes')
    }
    Toast(
      error.code === 'ECONNABORTED'
        ? 'タイムアウトしました'
        : `${error.response && error.response.data.message}`
    )
    return Promise.reject(error.response || error)
  }
)

router.afterEach((to, from) => {
  // 进入到下个页面的时候，关闭所有的notification
  if (to.name !== 'Login')
    localStorage.setItem('WEB_HISTORY', to.name as string)
})
