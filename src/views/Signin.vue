<template>
  <main>
		<div class="main-div">
			
    <form @submit.prevent="submit">
		<div class="text-top">
			Please register
		</div>

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

		</div>
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
		submit: function() {
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
		width: 100%;
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

	.main-div{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30vw;
		height: 70vh;
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
