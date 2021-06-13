//  Task 10
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.

//let div10 = тут получите все out-10

/*
function f10() {

	this.classList.toggle('bg-10')

}

let div10 = document.querySelectorAll('.out-10')
let i = 0
while (i < div10.length) {
	div10[i].onclick = f10
	i++
}

// а тут цикл, похожий на предыдущее задание
*/



function f10() {
	this.classList.toggle('bg-10')
}

let divs10 = document.querySelectorAll('.out-10')
let i = 0
while (i < divs10.length) {
	divs10[i].onclick = f10
	i++
}