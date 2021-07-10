// task 1 --------------------
//  &units=metric

fetch(
  'https://api.openweathermap.org/data/2.5/weather?id=706483&lang=en&appid=d670a59eee48636dd582e12dab8c76a1'
)
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.degree').innerHTML =
      Math.round(data.main.temp - 273.15) + '&deg;'
    document.querySelector('.disclamer').textContent =
      data.weather[0].description
    document.querySelector(
      '.features li'
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
  
 
        document.querySelector('.time').innerHTML =new Date(data.dt * 1000).toLocaleDateString('ru-RU')
    console.log(data)
  })
  .catch(function () {
    //catch any errors
  })
