// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

function t10(a, b) {
    let res
    if (a == b) {
        res = a
    } else if (a > b) {
        res = a
    } else if (b > a) {
        res = b
    }
    return res
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(999, 99)
}
