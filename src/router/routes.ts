import { RouteRecordRaw } from 'vue-router';


const page = (name: string) => () => import(`@/views/${name}.vue`)

const SysMgt = (name: string) => () => import(`@/views/SysMgt/${name}.vue`)

const Order = (name: string) => () => import(`@/views/Order/${name}.vue`)

const Personal = (name: string) => () => import(`@/views/Personal/${name}.vue`)

export const defaultRoutes: Array<RouteRecordRaw> = [
  {
    path: '/afterlogin',
    name: 'afterlogin',
    component: page('Home'),
  },
  {
    name: 'CompanyDetail',
    path: '/companydetail',
    component: SysMgt('CompanyDetail')
  },
  {
    name: 'Home',
    path: '/',
    component: page('Home'),
    meta: {
      title: 'HomePage'
    }
  },
  {
    name: 'Register',
    path: '/register',
    component: SysMgt('Register')
  },
  {
    name: 'OrderMenu',
    path: '/OrderMenu',
    component: Order('OrderMenu')
  },
  {
    path: '/login',
    name: 'Login',
    component: SysMgt('Login'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'OrderUp',
    path: '/OrderUp',
    component: Order('OrderUp')
  },
  {
    name: 'ForgetPwd',
    path: '/forgetPwd',
    component: SysMgt('ForgetPwd')
  }
];

export const routeMap = [
  {
    name: 'ResetPwd',
    path: '/resetPwd',
    component: SysMgt('ResetPwd'),
    meta: {
      roles: ['ROLE_USER', 'ROLE_STORE', 'ROLE_ADMIN', 'ROLE_WORKER']
    }
  },
  // {
  //   name: 'My',
  //   path: '/my',
  //   component: () => import('@/views/my/My'),
  //   meta: {
  //     roles: ['ROLE_USER', 'ROLE_STORE', 'ROLE_ADMIN', 'ROLE_WORKER']
  //   }
  // },
  {
    name: 'PersonalHome',
    path: '/personalHome',
    component: Personal('PersonalHome'),
    meta: {
      roles: ['ROLE_USER', 'ROLE_STORE', 'ROLE_ADMIN', 'ROLE_WORKER']
    }
  },
  {
    name: 'OrderUp',
    path: '/OrderUp',
    component: () => Order('OrderUp'),
    meta: {
      roles: ['ROLE_USER', 'ROLE_STORE', 'ROLE_ADMIN', 'ROLE_WORKER']
    }
  }
];
