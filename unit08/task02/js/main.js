//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.


let out = document.querySelector('.out-2')
function t2() {
    let i = 2
    
    while (i <= 122) {
       out.textContent += `${i} `
        i=i+2
    }



}

document.querySelector('.b-2').onclick = t2
