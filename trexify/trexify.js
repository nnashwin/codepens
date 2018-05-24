const createTrexDiv = (trexSrcImg) => {
	const trexImg = document.createElement('img')
	trexImg.src = trexSrcImg
	trexImg.style.height = "100vh"
	trexImg.style.width = "100vw"
	trexImg.id = 'trexImg'

	return trexImg
}

const createTrexSound = (trexRoarSrc) => {
	let godAudioDiv = document.createElement('audio')
	godAudioDiv.id = 'godzillaCry'
	godAudioDiv.src = trexRoarSrc
	godAudioDiv.autoplay = true
	return godAudioDiv
}

const createHoldDiv = (holdDivId) => {
	let holdDiv = document.getElementById('holdDiv')
	if (holdDiv && holdDiv.childNodes.length > 0) {
		Array.prototype.slice.call(holdDiv.childNodes).map((child) => {
			return holdDiv.removeChild(child)
		})

		return document.getElementById(holdDivId)
	}

	holdDiv = document.createElement('div')
	holdDiv.id = holdDivId
	return holdDiv
}

const trexify = (soundFileSrc, trexSrcImg, randomNum) => {
	const holdDiv = createHoldDiv('holdDiv'),
		trexDiv = createTrexDiv(trexSrcImg),
		godAudioDiv = createTrexSound(soundFileSrc)

	let style = document.createElement('style')
	style.type = 'text/css'

	const marginMod = randomNum > 0 ? '100%' : '-100%'
	const transformMod = randomNum > 0 ? '-1' : '1'
	
	let keyFrames = `
	#trexImg {
		transform: scaleX(${transformMod});
	}
	#holdDiv {
		animation-duration: 0.7s;
		animation-name: trexRun;
		animation-iteration-count: 1;
		animation-timing-function: smooth;
		animation-fill-mode: forwards;
	}
	@-webkit-keyframes trexRun {
		0%, 99% {
			margin-left: ${marginMod};
			width: 0;
			height: 0;
		}
		50% {
			margin-left: 0%;
			width: 100%;
			display: block;
		}
		100% {
			margin-left: ${marginMod};
			width: 0;
			height: 0;
			display: none;
			visibility: hidden;
		}
	}
	@-moz-keyframes trexRun {
		0%, 99% {
			margin-left: ${marginMod};
			width: 0;
			height: 0;
		}
		50% {
			margin-left: 0%;
			width: 100%;
			display: block;
		}
		100% {
			margin-left: ${marginMod};
			width: 0;
			height: 0;
			display: none;
			visibility: hidden;
		}
	}
	`

	style.innerHTML = keyFrames
	holdDiv.appendChild(style)
	holdDiv.appendChild(trexDiv)	
	document.body.appendChild(holdDiv)
	holdDiv.appendChild(godAudioDiv)
}

document.addEventListener("DOMContentLoaded", () => {
	trexify('godzillaroar.mp3', 'trex.png', Math.round(Math.random()))
})
