/*  Task 3.
  Наша предыдущая функция, сильно все еще зависима от внешних переменных.Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра и выводит их произведение.Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.

  */

function t3(a, b) {
    return a * b
}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4)
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6)
}
