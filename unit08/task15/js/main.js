//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

let out = document.querySelector('.out-15')

function t15() {
  let a = 10
  let i = 0
/*   while (a >= 0 && i <= 5) {
    out.textContent += `${a} ${i} `
    a--
    i++
  }
  console.log(a, i)
  while (a >= 0 || i >= 10) {
    out.textContent += `${a} ${i} `
    if (i == 10 || a == 0) break
    i++
    a--
  } */
let  b =10
    while (i <= 10) {

            
         out.textContent += `${b} ${i} `
        i++
        b--
    }
    
    
}

document.querySelector('.b-15').onclick = t15
