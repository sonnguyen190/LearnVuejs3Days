import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'
import ListProduct from '../components/ListProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ListProduct
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})

export default router
