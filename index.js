const axios = require('axios')

axios.defaults.baseURL = 'http://localhost:3000/'

async function httpRequest() {
	const { data } = await axios.get()
	console.log(data)
	return data
}

httpRequest()
