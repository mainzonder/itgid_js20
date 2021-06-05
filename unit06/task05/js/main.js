let out5 = document.querySelector('.out-5')
document.querySelector('.b-5').onclick = () => {
    let out = ''
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2) {
                out += 1
            } else {
                out += 0
            }
        }
        out += `<br>`
    }
    out5.innerHTML = out
}
