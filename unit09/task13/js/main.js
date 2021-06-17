//  Task 13
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.


let out = document.querySelector('.out-13')

let div13 = document.createElement('div')

function f13() {
	div13.textContent = "pushMe "
	div13.classList.add('bg-13')
	div13.onclick = f13_1
	out.appendChild(div13)
}

function f13_1() {
	document.querySelector('.out-13-1').innerHTML += this.innerHTML;

}


document.querySelector('.b-13').onclick = f13;