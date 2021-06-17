//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.


let out12 = document.querySelector('.out-12')
let a;

function f12() {
	a = document.createElement('div')
	a.classList.add('bg-12')
	a.textContent = "12"
	out12.appendChild(a)

}

document.querySelector('.b-12').onclick = f12;