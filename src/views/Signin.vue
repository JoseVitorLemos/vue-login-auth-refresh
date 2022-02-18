<template>
  <main>
    <form @submit.prevent="submit">
		<div class="text-top">Please register</div>

      <div class="form-floating">
        <input type="email" class="form-control" placeholder="your_emailmail.com" required v-model="email"/>
        <label>Email address</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password" required v-model="password" />
        <label>Password</label>
      </div>

      <div class="form-floating">
      <button id="button" class="w-100 btn btn-lg btn-primary">Register</button>
      </div>

    </form>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signin',

  data(){
		return {
			email: '',
			password: ''
		}
  },
  methods:{
		submit: async function() {
		axios.post('/account/signup', { email: this.email, password: this.password }).then(async res => res).catch(err => alert(err.message))
		this.$router.push('/') 
    }
  }
}
</script>

<style scoped>

	main{
		background-color: var(--color-background-light);
		align-items: center;
	}

	form{
		width: 400px;
		height: 200px;
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
		margin-bottom: 20px;
		margin-top: 20px;
	}

</style>
