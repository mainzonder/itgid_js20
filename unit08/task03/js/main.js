//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3() {
    let out = document.querySelector('.out-3')
    let i = 25
    while (i >= 7) {
        console.log(i)
        out.textContent += `${i} `
        i--
}
}

document.querySelector('.b-3').onclick = t3
