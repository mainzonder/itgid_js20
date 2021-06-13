//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


let div12 = document.querySelectorAll('.div-12')
let out = document.querySelector('.out-12')
function t12() {

    let i = 0
    while (i < div12.length) {
        div12[i].style.background = 'orange'
        console.log(div12[i])
        
        i++
    }
}

document.querySelector('.b-12').onclick = t12
