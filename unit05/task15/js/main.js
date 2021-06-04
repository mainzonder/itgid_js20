/* 
Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:

10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
Для вывода использовать цикл.
*/

document.querySelector('.b-15').onclick = () => {
  let out1 = ''
  let out2 = ''

  for (let i = 10; i >= 5; i--) {
    out1 += i + ' '
    out1 += -i + 10 + ' '
  }
  for (let i = 5; i <= 10; i++) {
    if (i == 5) continue
    out2 += 10 - i + ' '
    out2 += i + ' '
  }

  document.querySelector('.out-15').innerHTML = out1 + out2
}
