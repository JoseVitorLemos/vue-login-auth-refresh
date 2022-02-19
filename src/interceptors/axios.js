import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.response.use(response => response, async err => {
	const storage = localStorage.getItem('userDetails')

	const { refreshToken, ...user } = JSON.parse(storage)

	if(err.response.status === 401) {
		const { status, data } = await axios.post('auth/refresh-token', { refreshToken })
		if(status === 200) {
			const auth = Object.assign(user, data)
			localStorage.setItem('userDetails', JSON.stringify(auth))
		}
	}

	if(err.response.status == 400) {
		localStorage.removeItem('userDetails')
	}
})
