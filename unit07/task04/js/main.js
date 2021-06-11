// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет ваш возраст.

function t4(year) {
    return 2021 - year
}

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1980)
}
