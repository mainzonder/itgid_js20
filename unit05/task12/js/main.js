/* 
Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’

*/


document.querySelector('.b-12').onclick = () => {
    let div12 = document.getElementsByClassName('div-12')
    let out = ""
    console.log(div12)
    for (i = 0; i < div12.length; i++){
        div12[i].style.background = 'orange'
        out += div12[i].textContent +  `<br/>`
    }
document.querySelector('.out-12').innerHTML = out
}