/*

С помощью вложенных циклов, нарисуйте строку:

***_***_***_
где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.
 */

document.querySelector('.b-1').onclick = () => {
    let out = ''
    for (let i = 0; i < 3; i++) {
        for (let i = 0; i < 3; i++) {
            out += '*'
        }
        out += '_'
    }

    document.querySelector('.out-1').innerHTML = out
}
