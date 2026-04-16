import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView },
  { path: '/acerca-de', name: 'acerca', component: AboutView },
  { path: '/servicios', name: 'servicios', component: ServicesView },
  { path: '/contacto', name: 'contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
