//  Task 11
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.
let a = document.createElement('div')
let out11 = document.querySelector('.out-11')
   
function f11() {

 
    a.classList.add('one')
    a.innerHTML = "25"
    out11.appendChild(a)
}
   

 
 
document.querySelector('.b-11').onclick = f11
