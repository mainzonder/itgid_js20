function f20(e) {
  e.preventDefault()
  let form = document.querySelector('.f-20')

  document.querySelector('.out-20').innerHTML =
    form.elements[0].value + ' ' + form.elements[1].value
}

document.querySelector('.b-20').onclick = f20
