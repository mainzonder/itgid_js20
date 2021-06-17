//  Task 17
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет  out-17 с помощью replaceWith.

let out = document.querySelector('.out-17')
let a = document.createElement('div')

function f17() {
	a.classList.add('bg-17')
	a.textContent = "17"
	out.replaceWith(a)


}

document.querySelector('.b-17').onclick = f17;