let i71 = document.querySelector('.i-71');
let i72 = document.querySelector('.i-72');
 

let b7 = document.querySelector(".b-7");
b7.onclick = () => {
    let a = +i71.value
    let b = +i72.value
 document.querySelector(".out-7").innerHTML =  Math.pow(a, b);

        
};
