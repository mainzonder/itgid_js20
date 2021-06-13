//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...


let out = document.querySelector('.out')
let i13 =document.querySelectorAll('.i-13')
function t13() {
    i = 0
    while (i < i13.length) {
        console.log(i13)
        
        i13[i].value = `${i+1}`
        i++
    }
}

document.querySelector('.b-13').onclick = t13
