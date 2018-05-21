const trexify = () => {
	const holdDiv = document.createElement('div')
	holdDiv.id = "trexDiv"

	const trexImg = document.createElement('img')
	trexImg.src = "trex.png"
	trexImg.style.height = "100vh"
	trexImg.style.width = "100vw"
	holdDiv.appendChild(trexImg)
	document.body.appendChild(holdDiv)
}

document.addEventListener("DOMContentLoaded", trexify)
