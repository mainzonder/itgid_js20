//  Task 2
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
let out = document.querySelector('.out-4')
function f4() {
out.classList.toggle('bg-4')
}


let out5 = document.querySelector('.out-5')
function f5() {
   for (let i = 0; i < out.classList.length; i++){
      console.log(out.classList[i])
      if (out.classList[i] == 'bg-4') {
         out5.textContent = true
      } else {
         out5.textContent = false
      }
   }
}

document.querySelector('.b-4').onclick = f4
document.querySelector('.b-5').onclick = f5
