<template>
	<main>
		<div>
        <input type="text" placeholder="Find user with UserId" v-model="find" />
      <button id="button" class="w-100 btn btn-lg btn-primary" @click="handleInput">Search user</button>
		</div>

			<div class="container">
				<ul>
					<li>Id: {{ id }}</li>
					<li>Email: {{ email }}</li>
					<li>Data de criação: {{ created_at }}</li>
				</ul>
		</div>

	</main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FindUser',
	data() {
		return { 
			message: ''
		}
	},

	methods: {
  handleInput(){
		const { data } = axios.get(`account/${1}`)
		alert(data)
	}
  },

  mounted() {
		const user = localStorage.getItem('userDetails')
		const { auth } = JSON.parse(user)
		if(!auth) {
			this.$router.push('/') 
		}
  }
}
</script>

<style scoped>

	main{
		background-color: var(--color-background-light);
		align-items: start;
		width: 100%;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 70vh;

	}

	.form-floating{
		margin-bottom: 10px;
	}

	.text-top{
		align-items: center;
		color: var(--color-background-nav);
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 30px;
	}

	@media only screen and (max-width: 950px){
		.main-div{
			width: 80%;
			margin-top: 20%;
			align-items: start;
		}

		.text-top{
			font-size: 24px;
			margin-bottom: 20px;
		}
	}

</style>
