//  Task 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
let out = document.querySelector('.out-1')

function f1() {
    out.style.width = '200px'
    out.style.height = '40px'
    out.style.background ="red"
}

document.querySelector('.b-1').onclick = f1
