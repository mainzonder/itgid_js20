//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.

let out = document.querySelector('.out-4')
function t4() {
   let i = 77
    while (i >= 35) {
        out.textContent += `${i}_`
        i--
    }
}

document.querySelector('.b-4').onclick = t4
