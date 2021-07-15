let i5 = document.querySelector('.i-5')
let out5 = document.querySelector('.out-5')

 






document.querySelector('.b-5').onclick = function () {
    let a = +i5.value
    if (a < 0) {
        out5.innerHTML = 'm'
    } else if (a == 0) {
        out5.innerHTML = 0
    }
    else if(a > 0){
        out5.innerHTML = 1
        
        }
    }
