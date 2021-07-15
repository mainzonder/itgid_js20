// document.querySelector('.b-12').onclick = () => {
//    let i120 = document.querySelector('.i-120')
//    let a = i120.value
//    document.querySelector('.out-12').innerHTML = (typeof a)
   
//  }


let i120 = document.querySelector(".i-120");

function f12() {
  let v = i120.value;
  document.querySelector(".out-12").innerHTML = typeof v;
}

document.querySelector(".b-12").onclick = f12;