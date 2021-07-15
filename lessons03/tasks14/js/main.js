let i141 = document.querySelector('.i-141')
let i142 = document.querySelector('.i-142')
let out = document.querySelector('.out-14')
document.querySelector('.b-14').onclick = function f14() {
  let select = document.querySelector('select')
  let sbl = select.value

  if (sbl == '-') {
    console.log(select.value)
    out.innerHTML = +i141.value - +i142.value

  }
 else if (sbl == '+'){
    console.log(select.value)
  out.innerHTML =+i141.value + +i142.value
  }

}
