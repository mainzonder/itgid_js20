let i31 = document.querySelector('.i-31')
let i32 = document.querySelector('.i-32')
let out = document.querySelector('.out-3')



function f3() {
    console.log('its alive')
    let a = +i31.value;
    let b = +i32.value;

    if (a > b) {
        console.log(a)
        out.innerHTML = a
    }
    else if (a < b) {
        
        console.log(b)
        out.innerHTML = b
    }
    
}
document.querySelector(".b-3").onclick = f3;
