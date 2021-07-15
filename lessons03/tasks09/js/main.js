

document.querySelector('.b-9').onclick = () => {
let i9 = document.querySelector('.i-9')
  let out = document.querySelector('.out-9')
  let num = +i9.value
//   if (num >= 1 && num <= 32) {
//      out.innerHTML = 1
//   }
//   else if (num >= 33 && num <= 43) {
//     out.innerHTML = 2
//   }
//   else if (num >= 44 && num <= 64) {
//     out.innerHTML = 3
//   }
//   else {
//     out.innerHTML = 0
// }

  switch (true){
    case num >= 1 && num <= 32:
out.innerHTML = 1
      break;


    case num >= 33 && num <= 43:
      out.innerHTML = 2
      break;


    case num >= 44 && num <= 64:
      out.innerHTML = 3
      break;

    default:
      out.innerHTML = 0
      break;
}



  }
