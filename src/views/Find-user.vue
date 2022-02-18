<template>
	<main class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-center">
		<form class="form-find" @submit.prevent="submit">
				<div>
					<input 
						type="text" 
						placeholder="Find user with userId, name or email" 
						v-model="param" 
						autocomplete="off" 
					/>
					<button 
						@click="handleInput" 
						variant="outline-secondary"
					>
						Search user
					</button>
						
						<br/>

					  <text>User: {{ message }} {{text}}</text>

			</div>
		</form>
	</main>
</template>

<script>
import { ref, Vue } from 'vue'
import axios from 'axios'

export default {
  name: 'FindUser',
	params() {
		return {
			param: ''
		}
	},

	data() {
		return { 
			message: ''
		}
	},

	methods: {
  	handleInput() {
			const { data } = axios.get(`account/${this.param}`)
		}
		
		Vue.$watch(message, this.message = 'data')

  }

}
</script>
