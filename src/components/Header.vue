<template>
	<header>
		<nav class="container">
			<div>
				<a href="/" class="btn btn-outline-light me-2">Home</a>
			</div>
			<div>
				<a href="/login" class="btn btn-outline-light me-2">Login</a>
				<a href="/Signin" class="btn btn-outline-light me-2">Signin</a>
				<a href="/Find-user" class="btn btn-outline-light me-2" v-if="userActive">Find user</a>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
  name: 'Header',
  data(){
			//const response = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJpYXQiOjE2NDUxODcwNDcsImV4cCI6MTY0NTE5MDY0N30.jvmnYFBeW990Plo9AmCeu9d4gl_O40DHK0Y3RiwxfRU', auth: true }
			//window.localStorage.setItem('userDetails', JSON.stringify(response))
			const user = localStorage.getItem('userDetails')
			const { auth } = JSON.parse(user)
		return {
			userActive: auth
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

