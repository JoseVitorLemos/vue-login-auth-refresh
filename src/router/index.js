import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Login from '../views/Login.vue'
//import FindUser from '../views/Find-user.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Signin', name: 'Signin', component: Signin },
	{ path: '/Login', name: 'Login', component: Login },
	//{ path: '/Find-user', name: 'FindUser', component: FindUser }
]

const router = new VueRouter({
	routes,
	mode: 'history'
}) 

export default router
