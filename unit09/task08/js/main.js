//  Task 8
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
	//внутри цикла blocks8[i].classList....
	let i = 0;
	while (i < blocks8.length) {

		blocks8[i].classList.toggle('bg-8')
		i++
	}


}

document.querySelector('.b-8').onclick = f8;