/*
Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:

77_74_71_68_65_62_ ... _38_35_

от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
 */

function t4() {
    let out = ''
    for (let i = 77; i >= 35; i = i - 3) {
        console.log(i)
        out += i + '_'
    }
    document.querySelector('.out-4').innerHTML = out
}
document.querySelector('.b-4').onclick = t4
