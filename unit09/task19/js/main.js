//  Task 19
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.


let out = document.querySelector('.out-19')
let p19 = document.querySelectorAll('.p-19')


function f19() {
	let i = 0

	while (i < p19.length) {
		console.log(p19.length)
		let a = p19[i].getAttribute('data-b')
		out.textContent += `${a} `
		console.log(a)
		i++
	}

}

document.querySelector('.b-19').onclick = f19;