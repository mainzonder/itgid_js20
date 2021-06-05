let out3 = document.querySelector('.out-3')

document.querySelector('.b-3').onclick = () => {
    let out = ''
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            out += `*` + `_`
        }
        out += `<br>`
    }
    out3.innerHTML = out
}
