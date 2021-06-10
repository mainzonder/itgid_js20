//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


let out = document.querySelector('.out-1')

function t1() {
    let i = 0

    while ( i <= 50) {
    out.textContent +=  i+" "
        i++
}

}

document.querySelector('.b-1').onclick = t1
