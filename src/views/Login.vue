<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please login</h1>

      <div class="form-floating">
        <input type="email" class="form-control" name="email" placeholder="name@example.com">
        <label>Email</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" name="password" placeholder="Password">
        <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
    </form>
  </main>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup(){
    const router = useRouter()
    const submit = async e => {
      	const form = new FormData(e.target)

      	const inputs = Object.fromEntries(form.entries())

      	const { data } = await axios.post('/account/login', inputs)

				axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`

      	await router.push('/')
    }
    return {
      submit
    }
  }
}
</script>
