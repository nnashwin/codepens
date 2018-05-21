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
		animation-timing-function: smooth;\
		animation-fill-mode: forwards;\
	}\
	@-webkit-keyframes trexRun {\
		0%, 99% {\
			margin-left: -100%;\
			width: 0;\
			height: 0;\
		}\
		50% {\
			margin-left: 0%;\
			width: 100%;\
			display: block;\
		}\
		100% {\
			margin-left: -100%;\
			width: 0;\
			height: 0;\
			display: none;\
			visibility: hidden;\
		}\
	}\
	@-moz-keyframes trexRun {\
		0%, 99% {\
			margin-left: -100%;\
			width: 0;\
			height: 0;\
		}\
		50% {\
			margin-left: 0%;\
			width: 100%;\
			display: block;\
		}\
		100% {\
			margin-left: -100%;\
			width: 0;\
			height: 0;\
			display: none;\
			visibility: hidden;\
		}\
	}\
	'

	style.innerHTML = keyFrames
	holdDiv.appendChild(style)
	holdDiv.appendChild(trexImg)

	document.body.appendChild(holdDiv)
}

document.addEventListener("DOMContentLoaded", trexify)
