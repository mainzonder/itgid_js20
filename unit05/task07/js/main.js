/*
Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:

4 3 2 1 0
Задача решается с помощью цикла.
 */
function t7() {
    let out = ''

    let i7 = document.querySelector('.i-7').value
    for (let i = i7; i >= 0; i = i - 1) {
        out += i + ' '
    }
    document.querySelector('.out-7').innerHTML = out
}

document.querySelector('.b-7').onclick = t7
