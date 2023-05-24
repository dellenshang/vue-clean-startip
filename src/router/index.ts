import { createRouter, createWebHistory, Router } from 'vue-router'
import { defaultRoutes } from './routes';
import { useAuthStore } from '@/store';
const router: Router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes
});

router.beforeEach(async (to, _from, next) => {
  //localStorage.removeItem('LoginInfo');
  const vaild = localStorage.getItem('LoginInfo'); //不存在token时只能看见 home menu 及 companyinfo
  const Auth = useAuthStore()
  if (
    to.name === 'Home' ||
    to.name === 'OrderMenu' ||
    to.name === 'OrderUp' ||
    to.name === 'CompanyDetail'
  ) {
    next();
    return;
  }
  //不是登陆页面
  if (to.name !== 'Login') {
    //也不存在token
    if (!vaild) {
      //去登陆页面
      next({ name: 'Login' });
      return;
    } else {
      //存在token 刷新菜单
      //不存在菜单 则拉取菜单
      if (!localStorage.getItem('HadGetMenu') || !Auth.hadGetMenu) {
        await Auth.Auth_Init()
        // 切换角色时的重置路由
        router.hasRoute('Home') && router.removeRoute('Home');
        const extraMenu = JSON.parse(localStorage.getItem('dynamicRoutes'));
        console.log(extraMenu);
        const dynamicRoutes: any = {
          name: 'Home',
          path: '/',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: 'HomePage'
          },
          children: [...toRaw(Auth.dynamicRoutes)]
        };
        // 切换角色时的重置路由
        router.addRoute(dynamicRoutes);
        router.replace(to.fullPath);
        return;
      }
      //存在菜单
      if (to.name === 'afterlogin' || to.name === 'Home') {
        //如果时登陆后 或者主页 拿取历史页面并且进入 ，没有则进入主页
        const targetPageName = localStorage.getItem('WEB_HISTORY') || '';
        if (
          router.getRoutes().findIndex((e) => e.name === targetPageName) > -1
        ) {
          next({ name: targetPageName });
        } else {
          next({ name: 'Home' });
        }
      } else {
        if (to.name) next();
        return;
      }
    }
  } else {
    // 去登陆页时且存在登陆状态，则自动登陆
    if (vaild) {
      if (localStorage.getItem('dynamicRoutes')) {
        next({
          name: localStorage.getItem('WEB_HISTORY') || 'Home'
        });
      } else {
        // 401登出
        next();
      }
    } else {
      // logout
      next();
    }
  }
})

router.afterEach(() => {
})

export default router
