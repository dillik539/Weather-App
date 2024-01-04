
    const apiKey = 'bc6c6d0406c5ecca7ea963f81b4b23bd'
    const submit = document.querySelector('.submit')
    const cityName = document.getElementById('city-name')
    const weatherType = document.getElementById('weather-type')
    const description = document.getElementById('desc')
    const currentTemp = document.getElementById('temp')
    const minTemp = document.getElementById('min-temp')
    const maxTemp = document.getElementById('max-temp')
    const feelsLike = document.getElementById('feels-like')
    const humidity = document.getElementById('humidity')


const getData = () =>{
    const city = getCity()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            displayWeatherData(data)
        })
    .catch(err =>{
        clearDisplayData(city)
    })
}

const getCity = () => {
    const userInput = document.querySelector('.inputValue')
    const city = userInput.value
    userInput.value = ''
    return city
}

const displayWeatherData = (weatherData) =>{
    cityName.innerText = `${weatherData.name}`
    weatherType.innerText = `${weatherData.weather[0].main}`
    description.innerText = `${weatherData.weather[0].description}`
    currentTemp.innerText = `${Math.floor(weatherData.main.temp)}`
    minTemp.innerText = `${Math.floor(weatherData.main.temp_min)}`
    maxTemp.innerText = `${Math.floor(weatherData.main.temp_max)}`
    feelsLike.innerText = `${Math.floor(weatherData.main.feels_like)}`
    humidity.innerText = `${Math.floor(weatherData.main.humidity)}`
}
const clearDisplayData = (city) =>{
    cityName.innerText = `${city} Not Found!`
    weatherType.innerText = '----'
    description.innerText = '--'
    currentTemp.innerText = '--'
    minTemp.innerText = '--'
    maxTemp.innerText = '--'
    feelsLike.innerText = '--'
    humidity.innerText = '--'
}

submit.onclick = () => getData()