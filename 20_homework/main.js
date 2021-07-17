let k11 = document.querySelectorAll('.key')

function f11(e) {
    // console.log(e)

    for (let i = 0; i < k11.length; i++) {
        if (e.key === k11[i].innerHTML) {
            k11[i].classList.add('active')

            // console.log(k11[i].innerHTML)
            // k11[i].classList.remove('active')
        } else if (e.code === k11[i].innerHTML) {
            k11[i].classList.add('active')
        } else {
            k11[i].classList.remove('active')
        }
    }
    document.querySelector('.i-11').value = ''
}

document.querySelector('.i-11').onkeyup = f11
