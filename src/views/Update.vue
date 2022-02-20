<template>
  <main>
		<div class="main-div">
			<form @submit.prevent="submit">

			<div class="text-top">
				Change your password	
			</div>

      <div class="form-floating">
        <input type="email" class="form-control" placeholder="your_emailmail.com" required v-model="email" autocomplete="on"/>
        <label>Email address</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" placeholder="your_emailmail.com" required v-model="oldPassword" autocomplete="on"/>
        <label>Old password</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password" required v-model="newPasswordOne" autocomplete="on"/>
        <label>New password</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" placeholder="Password" required v-model="newPasswordTwo" autocomplete="on"/>
        <label>Repeat new password</label>
      </div>

			<div class="form-floating">
				<button class="w-100 btn btn-lg btn-primary">Update the password</button>
      </div>

      <div class="alert alert-danger" role="alert" v-if="error">
        {{ message }}
      </div>

			<div class="alert alert-success" role="alert" v-if="success">
        {{ message }}
      </div>

      </form>
		</div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',

  data(){
		return {
			email: '',
			oldPassword: '',
			newPasswordOne: '',
			newPasswordTwo: '',
			message: '',
			success: null,
			error: null 
		}
  },
  methods:{
		submit: async function() {
		if(this.newPasswordOne === this.newPasswordTwo) {
			this.error = null
			await axios.put(`account/update`, { email: this.email, oldPassword: this.oldPassword, newPassword: this.newPasswordOne }).then(async response => {
			console.log(response)
			if(!response) {
				this.message = 'Invalid email or password'
				this.success = false 
				this.error = true
			}

			if(response.data.statusCode === 200) {
				this.message = response.data.message 
				this.error = false 
				this.success = true
			}
			})
		} else {
			this.message = 'Password is not equal'
			this.success = false 
			this.error = true
		}
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
		align-items: center;
	}

	form{
		width: 100%;
	}

	.form-floating{
		margin-bottom: 10px;
	}

	.text-top{
		color: var(--color-background-nav);
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		align-items: center;
		margin-bottom: 30px;
	}

	.main-div{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30vw;
		height: 70vh;
	}

	.alert{
		text-align: center;
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
