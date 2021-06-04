/* 
Task 13
Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
*/

document.querySelector('.b-13').onclick = () => {
    let i13 = document.getElementsByTagName('input')
    for (i = 0; i < i13.length; i++){
i13[i].value = i+1
     
    }


}