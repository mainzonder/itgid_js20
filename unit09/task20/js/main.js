//  Task 20
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.
let out = document.querySelector('.out-20')
function f20() {
    out.setAttribute('title','go')
}

document.querySelector('.b-20').onclick = f20
f20
