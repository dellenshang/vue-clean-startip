import { createRouter, createWebHistory } from 'vue-router'
import { defaultRoutes } from './unauth-routes'
const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes
})

export function resetRoute(): void {
  router.getRoutes().forEach(route => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}
router.beforeEach((to, from, next) => {
  // 取得登陆状态
  const vaild = localStorage.getItem('Public_HR_Login')
  // 不在登陆页
  if (to.name !== 'Login' && !vaild) next({ name: 'Login' })
  else next()
  // 在登陆页时且存在登陆状态，则自动登陆
})

export default router
