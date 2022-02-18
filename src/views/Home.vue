<template>
	<main>
		<div class="text-top">
				{{ message }}
		</div>
	</main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data(){
		return {
			message: '',
		}
  },

  mounted(){
		axios.get('').then(async response => this.message = response.data)
  },
}
</script>

<style scoped>
	main{
		background-color: var(--color-background-home);
		justify-content: center;
		align-items: center;
	}

	.text-top{
		color: var(--color-background-nav);
		font-size: 36px;
		font-weight: bold;
	}
</style>
