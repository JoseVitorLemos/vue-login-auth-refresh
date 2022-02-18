import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Login from '../views/Login.vue'
import FindUser from '../views/Find-user.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Signin', name: 'Signin', component: Signin },
	{ path: '/Login', name: 'Login', component: Login },
	{ path: '/Find-user', name: 'FindUser', component: FindUser }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
