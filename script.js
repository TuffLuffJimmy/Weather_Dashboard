const key = '92f6421bdd73bd3186d373e83e500ce4'
let city = 'portland'
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${key}`

fetch(api)
  .then(r => r.json())
  .then( weather => {
    let thisWeather = document.getElementById('')
  })
  .catch(e => console.log(e))