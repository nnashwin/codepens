const trexify = () => {
	const body = document.getElementsByTagName('body')[0]
	const holdDiv = document.createElement('div')
	const trexImg = document.createElement('img')
	trexImg.src = "trex.png"
	holdDiv.appendChild(trexImg)
	body.appendChild(holdDiv)
}

document.addEventListener("DOMContentLoaded", trexify)
