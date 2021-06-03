let a21 = document.querySelector('.inp-1')
let a22 = document.querySelector('.inp-2')
let b2 = document.querySelector('.b-2')
let out = document.querySelector('.out-2')

function f2() {
    if (+a21 > +a22) {
        out.innerHTML = 'a21 biggest'
    } else if (+a21 < +a22) {
        out.innerHTML = 'a22 biggest'
    }
}
b2.onclick = f2()
