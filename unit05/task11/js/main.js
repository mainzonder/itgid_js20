/* 

Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так:

one 3 4 two

*/

function t11() {
  let div11 = document.querySelectorAll('.div-11')

  let out = ' '
  for (let i = 0; i < div11.length; ++i) {
    out += div11[i].textContent + ' '
  }
  document.querySelector('.out-11').innerHTML = out
}

document.querySelector('.b-11').onclick = t11
