<template>
  <main class="form-signin">
      <div class="form-floating">
				<h1 class="h3 mb-3 fw-normal">
					<text>{{ message }}</text>
				</h1>
      </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  name: 'Home',
  setup(){
		const message = ref('')

		onMounted(async () => {
			const { data } = await axios.get('/')
			message.value = data 
		})

    return {
     message 
    }
  }
}
</script>
