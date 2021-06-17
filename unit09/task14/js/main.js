//  Task 14
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.

let out = document.querySelector('.out-14')
let a = document.createElement('div')
function f14() {
  a.classList.add('bg-14')
  a.textContent = '14'
  out.prepend(a)
}

document.querySelector('.b-14').onclick = f14
