let out = document.querySelector('.out-5')

function f5() {
let checkBox = document.querySelector('.i-5')
    if (checkBox.checked == true) {
out.innerHTML = checkBox.value
    } else if (checkBox.checked != true) {
        out.innerHTML = false
    }


}


document.querySelector('.b-5').onclick = f5
