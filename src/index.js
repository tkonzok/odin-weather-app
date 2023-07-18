import './normalize.css';
import './style.css';
import Bg from './bg.jpg';

const weatherImg = document.querySelector('#weather');
const form = document.querySelector('form')
const btn = document.querySelector('#search-button');
const input = document.querySelector('#city-input');
const bg = document.querySelector('#bg');

const weatherTodayDiv = document.querySelector('.weather-today');
const todayDate = document.querySelector('.weather-today > .date')
const todayIcon = document.querySelector('#today-icon');
const currentTemp = document.querySelector('.weather-today #current-temperature');
const todayTemp = document.querySelector('.weather-today #minmax-temperature');
const todayCond = document.querySelector('.weather-today .condition');
const weatherDay1Div = document.querySelector('#day1');
const day1Date = document.querySelector('#day1 > .date')
const day1Icon = document.querySelector('#day1-icon');
const day1Temp = document.querySelector('#day1 .temperature');
const day1Cond = document.querySelector('#day1 .condition');
const weatherDay2Div = document.querySelector('#day2');
const day2Date = document.querySelector('#day2 > .date')
const day2Icon = document.querySelector('#day2-icon');
const day2Temp = document.querySelector('#day2 .temperature');
const day2Cond = document.querySelector('#day2 .condition');
const weatherDay3Div = document.querySelector('#day3');
const day3Date = document.querySelector('#day3 > .date')
const day3Icon = document.querySelector('#day3-icon');
const day3Temp = document.querySelector('#day3 .temperature');
const day3Cond = document.querySelector('#day3 .condition');

const weatherApiKey = 'e404ee23ac724f8db2c152612231707'
const giphyApiKey = '8s7SFBMuaeubNODDvWAmpA5k8nV5NouA'

let weatherData = {}

bg.src = Bg;

async function updateWeather(term) {
    try {
       const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${term}&days=4`
        const response = await fetch(url, {mode: 'cors'})
        weatherData = await response.json()
        console.log(weatherData)
        updateWeatherImage(weatherData.current.condition.text)
    } catch (error) {
        console.log(error);
        }
}

async function updateWeatherImage(term) {
    try {
       const url = `https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${term}`
        const response = await fetch(url, {mode: 'cors'})
        const imgData = await response.json()
        weatherImg.src = imgData.data.images.original.url 
    } catch (error) {
        weatherImg.src = 'https://media1.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=74c12b19qa38oey5ioadgo8y4uw2whwjlbdvtrnn57shrdr9&ep=v1_gifs_translate&rid=giphy.gif&ct=g';
        }
}

async function updateForecast(location) {
    console.log(location)
    await updateWeather(location)
    todayDate.textContent = `${weatherData.location.name}, ${weatherData.location.country} (${weatherData.current.last_updated})`
    todayIcon.src = `http:${weatherData.current.condition.icon}`
    currentTemp.textContent = `${weatherData.current.temp_c}°C`
    todayTemp.textContent = `${weatherData.forecast.forecastday[0].day.mintemp_c} / ${weatherData.forecast.forecastday[0].day.maxtemp_c}°C`
    todayCond.textContent = weatherData.current.condition.text

    day1Date.textContent = weatherData.forecast.forecastday[1].date
    day1Icon.src = `http:${weatherData.forecast.forecastday[1].day.condition.icon}`
    day1Temp.textContent = `${weatherData.forecast.forecastday[1].day.mintemp_c} / ${weatherData.forecast.forecastday[1].day.maxtemp_c}°C`
    day1Cond.textContent = weatherData.forecast.forecastday[1].day.condition.text

    day2Date.textContent = weatherData.forecast.forecastday[2].date
    day2Icon.src = `http:${weatherData.forecast.forecastday[2].day.condition.icon}`
    day2Temp.textContent = `${weatherData.forecast.forecastday[2].day.mintemp_c} / ${weatherData.forecast.forecastday[2].day.maxtemp_c}°C`
    day2Cond.textContent = weatherData.forecast.forecastday[2].day.condition.text

    day3Date.textContent = weatherData.forecast.forecastday[3].date
    day3Icon.src = `http:${weatherData.forecast.forecastday[3].day.condition.icon}`
    day3Temp.textContent = `${weatherData.forecast.forecastday[3].day.mintemp_c} / ${weatherData.forecast.forecastday[3].day.maxtemp_c}°C`
    day3Cond.textContent = weatherData.forecast.forecastday[3].day.condition.text
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form)
    updateForecast(data.get('location'))
})

updateForecast('Hamburg')