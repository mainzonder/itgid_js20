/* 
Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

*/
function t10() {
    let out = ""
    for (let i = 1950; i <= 2000; i = i+1){
        if (i%2 != true) {
        out +=i + " "
    }

    }
document.querySelector('.out-10').innerHTML = out

}

document.querySelector('.b-10').onclick = t10