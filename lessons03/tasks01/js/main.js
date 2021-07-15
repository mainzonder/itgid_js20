const inp1 = document.querySelector('.i-1')
let btn1 = document.querySelector('.start')
let divout = document.querySelector('.out-1')
btn1.onclick = function() {
    let inNum = inp1.value
    if (4 == inNum) {
        divout.innerHTML = 'TRUE'

    } else {
        divout.innerHTML = 'FALSE'
    }
}