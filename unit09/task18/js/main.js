//  Task 18
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.

let p18 = document.querySelector('.p-18')
let out = document.querySelector('.out-18')

function f18() {


	out.textContent = p18.getAttribute('data-b')
}

document.querySelector('.b-18').onclick = f18;