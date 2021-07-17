// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
  document.querySelector('.out-1').textContent += event.key + ' '
}
document.querySelector('.i-1').onkeypress = t1

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
function t2(event, _res) {
  document.querySelector('.out-2').innerHTML += event.keyCode + ' '
}

document.querySelector('.i-2').onkeypress = t2
// ваше событие здесь!!!

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75

function t3(e) {
  w3 = e.keyCode
  if (w3 >= 97 && w3 <= 122) {
    document.querySelector('.out-3').innerHTML = true
  }
  if (w3 >= 48 && w3 <= 58) {
    document.querySelector('.out-3').innerHTML = false
  }
}
document.querySelector('.i-3').onkeypress = t3
// ваше событие здесь!!!

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
// let out4 = ' '
function t4(event) {
  document.querySelector('.out-4').innerHTML += event.key.toLowerCase()
  //   let kc4 = event.keyCode
  //   if (kc4 >= 97 && kc4 <= 122) {
  //     document.querySelector('.out-4').innerHTML += event.key
  //     // console.log(event.keyCode)
  //   } else if (kc4 <= 90 && kc4 >= 65) {
  //     document.querySelector('.out-4').innerHTML += event.key.toLowerCase()
  //   } else {
  //     document.querySelector('.out-4').innerHTML += event.key
  //   }
}
// document.querySelector('.out-4').innerHTML = out4
document.querySelector('.i-4').onkeypress = t4
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
  document.querySelector('.out-5').innerHTML += e.key.toUpperCase()
}
document.querySelector('.i-5').onkeypress = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
  let n = e.keyCode
  if (n >= 97 && n <= 122) {
    return true
  } else {
    return false
  }
}

document.querySelector('.i-6').onkeypress = t6
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случайный символ из массива a7 при каждом вводе символа. */

const a7 = []
function t7() {
  a7.push(document.querySelector('.i-7').value)
  console.log(a7)

  let i = Math.floor(Math.random() * a7.length)
  document.querySelector('.out-7').innerHTML = `${i} : ` + a7[i]

  document.querySelector('.i-7').value = ''
}

document.querySelector('.i-7').onkeyup = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
  let a8 = {
    i: 1,
    o: 0,
    l: 7,
  }
  if (a8[e.key] !== undefined) {
    document.querySelector('.out-8').innerHTML += a8[e.key]
  } else {
    document.querySelector('.out-8').innerHTML += e.key
  }
}
document.querySelector('.i-8').onkeypress = t8
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let i9 = 0
function t9(e) {
  if (e.key === 'ArrowDown') {
    i9++
    document.querySelector('.out-9').textContent = i9
  }
}

document.querySelector('.i-9').onkeyup = t9
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10(e) {
  let img10 = document.querySelector('.div-10 img')
  let baseW = img10.width
  let baseH = img10.height
//   console.dir(img10)
  switch (e.key) {
    case 'ArrowLeft':
      img10.style.width = baseW + 1 + 'px'
    //   console.log(e.key)
      break

    case 'ArrowRight':
      img10.style.width = baseW + 1 + 'px'
    //   console.log(e.key)
      break

    case 'ArrowUp':
      img10.style.height = baseH + 1 + 'px'
    //   console.log(e.key)
      break

    case 'ArrowDown':
      img10.style.height = baseH + 1 + 'px'
    //   console.log(e.key)
      break
  }
}
document.querySelector('.i-10').onkeyup = t10
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {}

// ваше событие здесь!!!
