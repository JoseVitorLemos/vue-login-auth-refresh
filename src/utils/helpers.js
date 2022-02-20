export function formatDate(date) {
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	if(seconds < 10) seconds = '0'.concat(seconds)
	var ampm = hours >= 12 ? 'pm' : 'am'
	hours = hours % 12
	hours = hours >= 0 ? hours : 12
	minutes = minutes < 10 ? '0'+minutes : minutes
	var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
	return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + strTime
}


