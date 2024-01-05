
    /**
     * This is the api key that is obtained from the open weather map api.
     * This can be obtained once we sign up and is free as of January, 2024.
     */
    const apiKey = 'bc6c6d0406c5ecca7ea963f81b4b23bd'

    /**
     * All HTML elements required for later use
     */
    const submit = document.querySelector('.submit')
    const cityName = document.getElementById('city-name')
    const weatherType = document.getElementById('weather-type')
    const description = document.getElementById('desc')
    const currentTemp = document.getElementById('temp')
    const minTemp = document.getElementById('min-temp')
    const maxTemp = document.getElementById('max-temp')
    const feelsLike = document.getElementById('feels-like')
    const humidity = document.getElementById('humidity')

/**
 * This function gets data from the website in the form of JSON and then
 * processes it accordingly. The request is made based on user supplied city name.
 */
const getData = () =>{
    //city the user type in the search field
    const city = getCity()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            //display the required data in the DOM
            displayWeatherData(data)
        })
        //When error occured, clear all the data field and display error message.
    .catch(err =>clearDisplayData(city))
}
/**
 * 
 * @returns - city name
 * This function capture the user input, stores in a variable, clears search field,
 * and returns the stored value
 */
const getCity = () => {
    const userInput = document.querySelector('.inputValue')
    const city = userInput.value
    userInput.value = ''
    return city
}
/**
 * 
 * @param {*} weatherData
 * This function display only the required data in the DOM.
 */
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
/**
 * 
 * @param {*} city 
 * This function clears all the data field. If the user supplied city
 * is not found, it will display '{city} not found' message.
 */
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