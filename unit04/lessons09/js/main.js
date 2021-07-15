function f9() {
    let r9 = document.querySelector('.r-9')
    let out9 = document.querySelector('.out-9')
    if (r9.checked) {
        out9.innerHTML = r9.value
    } else {
        out9.innerHTML = 0
    }
}

document.querySelector('.b-9').onclick = f9
