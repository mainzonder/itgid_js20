let out4 = document.querySelector('.out-4')
document.querySelector('.b-4').onclick = () => {
    let out = ''
    for (let i = 1; i <= 3; i++) {
        out += i + '_'
        for (let k = 1; k <= 5; k++) {
            out += k + ' '
        }
        out4.innerHTML = out
    }
}
