import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.response.use(response => response, async err => {
	const storage = localStorage.getItem('userDetails')
	const user = JSON.parse(storage)
	if(err.response.status === 401) {
		const { status, data } = await axios.post('auth/refresh-token', { refreshToken: user.refreshToken })
		if(status === 200) {
			const auth = Object.assign(user, data)
			localStorage.setItem('userDetails', JSON.stringify(auth))
			axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
		}
	}

	if(err.response.status == 400) {
		console.log(err.response)
		//localStorage.removeItem('userDetails')
		//location.reload(true)
	}
})
