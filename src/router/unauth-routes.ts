import { RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import ApplySheet from '../views/Apply/ApplySheet.vue'

// error
const error = (name: string) => () => import(`../views/Exception/${name}.vue`)

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'dynamicSheet',
        path: '/flow/dynamicSheet',
        component: ApplySheet
      },
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: error('404') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  }
]
