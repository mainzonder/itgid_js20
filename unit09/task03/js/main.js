//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
let out = document.querySelector('.out-2')
function f2() {
   out = out.classList.remove('bg-2')
}

document.querySelector('.b-2').onclick = f2
