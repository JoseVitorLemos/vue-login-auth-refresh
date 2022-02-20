<template>
	<header>
		<nav class="container">

			<div>
				<router-link to="/" class="btn btn-outline-light me-2">Home</router-link>
			</div>

			<div v-if="!userActive">
				<router-link to="/Login" class="btn btn-outline-light me-2">Login</router-link>
				<router-link to="/Signin" class="btn btn-outline-light me-2">Signin</router-link>
			</div>

			<div v-if="userActive">
				<router-link to="/Find-user" class="btn btn-outline-light me-2">Find User</router-link>
				</div>

			<div v-if="userActive">
				<button id="button" class="btn btn-outline-light me-2" @click="logout">Logout</button>
			</div>

		</nav>
	</header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
	data() {
		return {
			userActive: null
		}
	},

		async mounted(){
		const user = localStorage.getItem('userDetails')
		if(user == null) {
			localStorage.setItem('userDetails', JSON.stringify({ auth: false }))
		} else {
			const { accessToken } = JSON.parse(user)

			if(accessToken != null) {
				const { status } = await axios.post('auth/token', { accessToken })
				if(status != 200) { 
					localStorage.setItem('userDetails', JSON.stringify(Object.assign(user, { auth: false })))
					this.userActive = false
				} else {
					axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
					this.userActive = true
				} 
			}
		}
	},

	methods: {
		logout(){
			axios.defaults.headers.common['Authorization'] = ''
			localStorage.removeItem('userDetails')
			location.reload(true)
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>

header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content:	center;
  align-items: center;
}

nav{
	display: flex;
	justify-content: space-between;
}

</style>

