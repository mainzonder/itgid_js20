//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

let out = document.querySelector('.out-6')
let i6 = document.querySelector('.i-6') 


function t6() {
    out.innerHTML=""
    let i = i6.value
    while (i > 0) {
    out.innerHTML +=`******`+"<br>"


        i--
}

}

document.querySelector('.b-6').onclick = t6
