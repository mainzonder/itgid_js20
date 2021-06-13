//  Task 6
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.

let out = document.querySelector('.out-6')
let p6
function f6() {
  p6 = document.getElementsByTagName('p')
  let i = 0
  while (i < p6.length) {
    i++
    let a =""
    if (p6[i].className === 'p-6') {
      console.log('p', p6[i])
      a =  p6[i].className
    }
    out.textContent = a.length 
  }

  // console.log(p6.length )
}

document.querySelector('.b-6').onclick = f6
