//  Task 7
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7')

function f7() {
	//внутри цикла blocks7[i].classList....

	console.log(blocks7)

	let i = 0;
	while (i < blocks7.length) {
		blocks7[i].classList.add('bg-7')
		i++
	}


}

document.querySelector('.b-7').onclick = f7

