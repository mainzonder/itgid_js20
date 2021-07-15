
let i6 = document.querySelector('.i-6')
let b6 = document.querySelector('.b-6')
let out = document.querySelector('.out-6')


b6.onclick = function f6() {
    console.log('its alive')
    let a = i6.value
    if (a % 2 == 0) {
        out.innerHTML = 'even'
    } else {
        out.innerHTML ='odd'
    }

}