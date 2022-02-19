<template>
	<header>
		<nav class="container">

			<div>
				<router-link to="/" class="btn btn-outline-light me-2">Home</router-link>
			</div>

			<div>
				<router-link to="/Login" class="btn btn-outline-light me-2" v-if="!userActive">Login</router-link>
				<router-link to="/Signin" class="btn btn-outline-light me-2" v-if="!userActive">Signin</router-link>
				<router-link to="/Find-user" class="btn btn-outline-light me-2" v-if="userActive">Find User</router-link>
			</div>

		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
  mounted(){
		const user = localStorage.getItem('userDetails')
		if(!user) localStorage.setItem('userDetails', JSON.stringify({ auth: false }))
		const { data } = JSON.parse(user)
		return {
			userActive: data.auth
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

