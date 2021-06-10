// Task 5
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.

function t5(yourName) {
    return 'hello ' + yourName
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Alex')
}
