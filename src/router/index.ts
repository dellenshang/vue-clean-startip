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
export default router
