const trexify = () => {
	const holdDiv = document.createElement('div')
	holdDiv.id = "trexDiv"

	const trexImg = document.createElement('img')
	trexImg.src = "trex.png"
	trexImg.style.height = "100vh"
	trexImg.style.width = "100vw"

	let style = document.createElement('style')
	style.type = 'text/css'

	let keyFrames = '\
	#trexDiv {\
		animation-duration: 1s;\
		animation-name: trexRun;\
		animation-iteration-count: 1;\
		animation-timing-function: ease-in-out;\
		animation-fill-mode: forwards;\
	}\
	@-webkit-keyframes trexRun {\
		0%, 100% {\
			margin-left: -100%;\
			width: 100%;\
			display: none;\
		}\
		50% {\
			margin-left: 0%;\
			width: 100%;\
			display: block;\
		}\
	}\
	@-moz-keyframes trexRun {\
		0%, 100% {\
			margin-left: -100%;\
			width: 100%;\
			display: none;\
		}\
		50% {\
			margin-left: 0%;\
			width: 100%;\
			display: block;\
		}\
	}\
	'

	style.innerHTML = keyFrames
	holdDiv.appendChild(style)
	holdDiv.appendChild(trexImg)

	document.body.appendChild(holdDiv)
}

document.addEventListener("DOMContentLoaded", trexify)
