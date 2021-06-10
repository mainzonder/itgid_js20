function t9(num) {
    let res
    if (num % 2) {
        res = true
    } else {
        res = false
    }
    return res
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(17)
}
