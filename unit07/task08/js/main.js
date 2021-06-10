// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim()
}

document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').textContent = t8('           Hello  ')
}
