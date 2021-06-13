//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.



let out = document.querySelector('.out-14')
let i14 = document.querySelectorAll('.i-14')
function t14() {
    i = 0
    while (i < i14.length) {
        if (i14[i].checked) {
          out.textContent=i14[i].value
      }
    
   
 
        i++
    }
}

document.querySelector('.b-14').onclick = t14
