//  Task 16
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.


let out = document.querySelector('.out-16')
let a = ""

function f16() {
	a = document.createElement('div')
	a.textContent = "16"
	a.classList.add('bg-16')
	out.after(a)
}


document.querySelector('.b-16').onclick = f16;