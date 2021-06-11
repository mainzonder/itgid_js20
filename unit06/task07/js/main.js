/*
*
**
***
****
Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.
 */

document.querySelector('.b-7').onclick = () => {
    let out = ''
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < i; k++) {
            out += '*'
        }
        out += `<br>`
    }

    document.querySelector('.out-7').innerHTML = out
}
