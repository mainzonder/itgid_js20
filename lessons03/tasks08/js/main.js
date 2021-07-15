let s8 = document.querySelector(".s-8");

document.querySelector(".b-8").onclick = () => {
  let num = +s8.value;
  let out = document.querySelector(".out-8");

  switch (num) {
    case 1:
      out.innerHTML = "one";
      break;

    case 2:
      out.innerHTML = "two";
      break;
    case 3:
      out.innerHTML = "three";
      break;
  }

  console.log(num);
};
