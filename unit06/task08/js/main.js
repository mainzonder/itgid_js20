document.querySelector('.b-8').onclick = () => {
    let out = ''
    for (let i = 5; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            out += '*'
        }
        out += `<br>`
    }

    document.querySelector('.out-8').innerHTML = out
}

/*

Task 8
С помощью вложенных циклов, нарисуйте строку:

*****
****
***
**
*
Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки.
 */
