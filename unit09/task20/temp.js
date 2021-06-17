function showArr(domElem, arr) {
	let out = ""
	for (let i = 0; i < arr.length; i++) {
		out += arr[i] + ' '
	}

	document.querySelector(domElem).innerHTML = out
}

let d1 = [33, 'best', 66, 'best']

function f1() {
	showArr('.out-1', d1)
}

document.querySelector('.b-1').onclick = f1