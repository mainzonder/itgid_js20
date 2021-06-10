/*
С помощью вложенных циклов, нарисуйте строку:

01 02 03 04 05 06 07 08 09 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
Внешний цикл выводит перенос строки br и запускается от 0 до 6.

Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.

 */
/* document.querySelector('.b-10').onclick = () => {
    let out = ''
    for (let i = 0; i < 6; i++) {
        for (let k = 0; k <= 10; k++) {
            if (k !== 10) {
                out += `0${k + 1}` + ' '
            } else {
                out += k + 1 + ' '
            }
        }
        out += `<br>`
        document.querySelector('.out-10').innerHTML = out
    }
} */
/* for (let k = 0; k < 10; k++) {
                if (k !== 9) {
                   out += `0${k + 1}` + ' '
                   */

document.querySelector('.b-10').onclick = () => {
    let out = ''

    for (let i = 0; i < 6; i++) {
        if (i == 5) break
        let a = 10
        let counter = i * a++
        for (let k = 0; k <= 9; k++) {
            if (counter < 9) {
                if (k == 9) {
                    out += `${1 + k}` + ' '
                } else if (k <= 9) {
                    out += `0${1 + k}` + ' '
                }
            } else {
                out += counter + +k + +1 + ' '
            }
        }
        out += `<br>`
    }
    document.querySelector('.out-10').innerHTML = out
}

//
/*         if (i == 0) {
            for (let k = 0; k <= 9; k++) {
                if (k != 9) {
                    out += `0${k + 1}` + ' '
                } else if ((k = 9)) {
                    out += `${k + 1}` + ' '
                }
            }
        }
        out += `<br>` */

// let b = `${counter * i}`
// if (+i / 10 === 1) {
//     out += `0${i}` + ' '
// }
// out += `${k * i + i} `
/*
            let a = 1
            jstart = `${a + 1}`
            jmax = `${+5}`
            for (let j = jstart; j <= jmax + 1; j++) {
                out += j + ' '
            }
            out += `<br>` */
/*
        else if (i == 1) {
            out += `<br>`
            for (let j = 31; j <= 40; j++) {
                out += j + ' '
            }
            out += `<br>`
            for (let j = 41; j <= 50; j++) {
                out += j + ' '
            }
        } */
