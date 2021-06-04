/*

С помощью вложенных циклов, нарисуйте строку:

***_***_***_
где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.
 */

document.querySelector('.b-1').onclick = () => {
    let out = ''
    for (i = 0; i < 3; i++) {
        for (k = 0; k < 3; k++) {
            out += '*'
        }
        out += '_'
    }

    document.querySelector('.out-1').innerHTML = out
}
