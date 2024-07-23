import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FixedCostCalculator from '@/components/FixedCostCalculator.vue'
import DynamicCostCalculator from '@/components/DynamicCostCalculator.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'fixed',
          alias: '',
          name: 'fixed',
          component: FixedCostCalculator,
        }, {
          path: 'dynamic',
          name: 'dynamic',
          component: DynamicCostCalculator
        }

      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ]
})

export default router
