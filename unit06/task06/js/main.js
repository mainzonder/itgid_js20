/*
 10x01x
 10x01x
 10x01x

 */

let out6 = document.querySelector('.out-6')

document.querySelector('.b-6').onclick = () => {
    let out = ''

    for (let i = 0; i < 3; i++) {
        for (let k = 1; k < 7; k++) {
            if (k % 3 == false) {
                out += 'x'
            } else {
                if (k % 2) {
                    out += 1
                } else out += 0
            }
        }

        out += `<br>`
    }
    out6.innerHTML = out
}
