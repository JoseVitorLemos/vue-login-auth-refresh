<template>
  <main class="form-signin">

      <div class="form-floating">

      <h1 class="h3 mb-3 fw-normal">qiasjdiojas</h1>
        <label>{{ message }}</label>
      </div>

  </main>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  name: 'Login',
  setup(){
		const message = ref('')

		const text = async () => {
			const { data } = axios.get()
			return data
		}

		message.value = text

    return {
     message 
    }
  }
}
</script>
