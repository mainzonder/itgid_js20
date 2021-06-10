//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

let out = document.querySelector('.out-7')
let i71 = document.querySelector('.i-71')
function t7() {
    out.textContent  = ""
     let i = i71.value
  while (i > 0) {
    out.textContent += i + ' '
    i--
  }
}

document.querySelector('.b-7').onclick = t7
