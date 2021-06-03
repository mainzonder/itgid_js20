function f7() {
    let i7 = document.querySelector('.i-7')
    let out71 = document.querySelector('.out-71')
    let out72 = document.querySelector('.out-72')
    out71.innerHTML = i7.value
let ivl7 = i7.value.length
    if (ivl7 >= 6) {
    out72.innerHTML = 1
    } else if (ivl7 <= 6) {
        out72.innerHTML = 0
}

}


document.querySelector('.b-7').onclick = f7
