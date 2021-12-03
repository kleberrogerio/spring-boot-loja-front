import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marca',
    name: 'Marca',
    component: () => import('../views/Marcas.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/produto',
    name: 'Produto',
    component: () => import('../views/Produtos.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import('../views/Usuarios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
