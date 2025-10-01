import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import mainStore from '@/stores/mainStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      redirect: 'home/assessment',
      component: () => import('@/pages/MainPage.vue'),
      children: [
        {
          path: 'assessment',
          component: () => import('@/pages/Assessment/AssessmentPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: 'home/assessment',
    },
  ],
})

router.beforeEach(async () => {
  const store = mainStore()
  store.updateLoading(true)
  NProgress.set(0.4)
})

router.beforeResolve(() => {
  NProgress.set(0.5)
})

router.afterEach(() => {
  const store = mainStore()
  store.updateLoadingState(100)
  NProgress.set(1.0)
  store.updateLoading(false)
})

export default router
