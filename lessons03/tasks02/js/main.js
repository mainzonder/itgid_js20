let a21 = 145;
let a22 = 132;
let out = document.querySelector('.out-2')

function f2() {
    if (a21 > a22) {
        out.innerHTML = 'a21 больше'
    } else if (a21<a22){
        out.innerHTML = 'a22 больше' 
    }

}

document.querySelector(".b-2").onclick = f2;
