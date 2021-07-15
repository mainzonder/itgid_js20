function f4(){

    let out = document.querySelector('.out-4');
    let i4 = document.querySelector('.i-4');

    if (i4.checked) {
        out.innerHTML = true
    } else {
        out.innerHTML = false
    }
}


document.querySelector('.b-4').onclick = f4
