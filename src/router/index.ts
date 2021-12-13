import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', component: () => import('views/home.vue') }
  ]
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
