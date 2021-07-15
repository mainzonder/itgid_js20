let i4 = document.querySelector('.i-4')
let out = document.querySelector('.out-4')


function f4() {
    let a = 2021
    let b = +i4.value;

    if ((a - b) >= 18) {
        out.innerHTML = 1
    } else {out.innerHTML = 0}
}








document.querySelector('.b-4').onclick = f4