
const apiKey = 'bc6c6d0406c5ecca7ea963f81b4b23bd'
const inputValue = document.querySelector('.inputValue')
const submit = document.querySelector('.submit')
const weatherInfoDiv = document.querySelector('.showWeatherInfo')


const getData = () =>{
    const city = inputValue.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            weatherInfoDiv.innerHTML = `<h2>${data.name}</h2>
            <h3>Weather: ${data.weather[0].description}</h3>
            <h3>Current Temperature: ${Math.floor(data.main.temp)}</h3>
            <h3>Feels Like: ${Math.floor(data.main.feels_like)}</h3>
            <h3>Maximum: ${Math.floor(data.main.temp_max)}</h3>
            <h3>Minimum: ${Math.floor(data.main.temp_min)}</h3>
            <h3>Humidity: ${Math.floor(data.main.humidity)}</h3>`
        })
        inputValue.value = ''
}

submit.onclick = () => getData()