function f8() {
    let out = document.querySelector('.out-8')
    out.innerHTML = `<input class="i-8" type="password" ><button class="b-81">superMagic</button>`
    document.querySelector('.b-81').onclick = f81
}

function f81() {
    let out81 = document.querySelector('.out-81')
    let i8 = document.querySelector('.i-8')
    out81.innerHTML = i8.value
}

document.querySelector('.b-8').onclick = f8
