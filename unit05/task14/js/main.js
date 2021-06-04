/* 

Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

*/

document.querySelector('.b-14').onclick = () => {
  let i14 = document.getElementsByClassName('i-14')
  let out
  for (let i = 0; i < i14.length; i++) {
    if (i14[i].checked) {
      out = i14[i].value
    }
  }
  document.querySelector('.out-14').innerHTML = out
}
