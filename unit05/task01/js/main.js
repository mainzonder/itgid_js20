function f1() {
    for (let i = 0; i <= 50; ++i) {
        console.log(i)
        document.querySelector('.out-1').innerHTML += i + ' '
    }
}
document.querySelector('.b-1').onclick = f1
