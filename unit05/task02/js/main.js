function t2() {
    for (let i = 2; i <= 122; i = i + 2) {
        document.querySelector('.out-2').innerHTML += i + ' '
    }
}

document.querySelector('.b-2').onclick = t2
