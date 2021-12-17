import { RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  }
]
