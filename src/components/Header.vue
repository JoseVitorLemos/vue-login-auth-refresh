<template>
	<header>
	<div class="container">
		<div class="row">

      <div class="col-sm" id="sm1">
				<router-link to="/" class="btn btn-outline-light me-2">Home</router-link>
			</div>

		<div class="col-sm" v-if="userActive" id="sm2">
				<router-link to="/Find-user" class="btn btn-outline-light me-2">Find User</router-link>
		</div>

		<div class="col-sm" v-if="!userActive" id="sm3">
				<router-link to="/Login" class="btn btn-outline-light me-2">Login</router-link>
				<router-link to="/Signin" class="btn btn-outline-light me-2">Signin</router-link>
		</div>

			<div class="col-sm" v-if="userActive" id="sm3">
				<router-link to="/update" class="btn btn-outline-light me-2">Update</router-link>
				<button class="btn btn-outline-light me-2" @click="logout">Logout</button>
			</div>

		</div>
	</div>
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

#sm1{
  text-align: start;
}

#sm2{
  text-align: center;
}

#sm3{
  text-align: end;
}

</style>

