<template>
	<main>

		<div class="container">
		<div class="input-group mb-3">
			<div class="input-group-prepend">
				<button class="btn btn-outline-secondary" type="button" @click="handleInput">Search user</button>
			</div>
				<input type="text" class="form-control" placeholder="Search by email" aria-label="" aria-describedby="basic-addon1" v-model="input">
			</div>
		</div>

		<div class="container-list" v-if="table">
			<ul class="list-group">
				<li class="list-group-item list-group-item-dark">User account</li>
				<li class="list-group-item"><b>Id: </b> {{ id }}</li>
				<li class="list-group-item"><b>Email: </b>{{ email }}</li>
				<li class="list-group-item"><b>Data de criação: </b>{{ created_at }}</li>
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
			input: '',
			id: '',
			email: '',
			created_at: '',
			table: null 
		}
	},

	methods: {
  async handleInput(){
		if(this.input.length > 0) {
		const input = this.input.replace(/\s/g, '')
		const { data } = await axios.post(`account/search`, { email: input })
			const { id, email, created_at } = data
			this.id = id
			this.email = email 
			this.created_at = created_at
			this.table = true 
		}
	}
  },

  mounted() {
		const user = localStorage.getItem('userDetails')
		if(!user) this.$router.push('/') 
		const { auth } = JSON.parse(user)
		if(!auth)	this.$router.push('/') 
  }
}
</script>

<style scoped>

	main{
		background-color: var(--color-background-light);
		align-items: start;
		width: 100%;
		align-items: center;
		justify-content: start;
		height: 70vh;

	}

	.container{
		width: 90%;
		margin-top: 30px;
	}

	.container-list{
		margin-top: 30px;
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
