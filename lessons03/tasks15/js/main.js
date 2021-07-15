let s151 = document.querySelector(".s-151");
let s152 = document.querySelector(".s-152");
let s153 = document.querySelector(".s-153");
let out = document.querySelector(".out-15");




let result;

function f15() {



    if (s153.value == 'o0') {

        result = s151.value && s152.value
        alert(result)
        out.innerHTML = result

    } else {

        result = s151.value || s152.value
        alert(result)
        out.innerHTML = result
    }

}
document.querySelector(".b-15").onclick = f15;

// ошибка = != ==

// if ((a = "3")) {
//   let res = b && c;
//   console.log(res)
//       out.innerHTML = res;
// }

// else if ((a = "4")) {
//   let res = b || c;
//   console.log(res);
//   out.innerHTML = res;