//  Task 15
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.


let out = document.querySelector('.out-15')
let a = document.createElement('div')
function f15() {
    a.classList.add('bg-15')
    a.innerHTML ="15"
    out.app(a)
}

document.querySelector('.b-15').onclick = f15
