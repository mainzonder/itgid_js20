//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.

function f9() {
	//this.classList...  // все решается одной строкой
	this.classList.toggle('bg-9')
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
	div9[i].onclick = f9;
}