// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255].

function t7() {
    function t6(a, b) {
        return Math.floor(Math.random() * (a + b))
    }
    return `rgb(${t6(1, 255)},${t6(1, 255)},${t6(0, 255)})`
}
//return `rgb(${t6(0,255)}....допишите сами

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7()
    // `rgb(0, 222, 122)`
}
