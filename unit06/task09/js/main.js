/* С помощью вложенных циклов, нарисуйте строку:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры

*/


document.querySelector('.b-9').onclick = () => {
    let out = ""
    for (let i = 0; i < 6; i++){
        for (let k = 0; k < i; k++){
            out += k+ +1 + " "
        }
        out += `<br>`
    }
        




    document.querySelector('.out-9').innerHTML = out
}