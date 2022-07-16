//===================================================
// Below is the code needed to run the weather app
//===================================================

const api = {
    key: "e94c534dc62bfc23b1389cd61f78ca11",
    base: "https://api.openweathermap.org/data/2.5/"
}
const query = "Las Vegas, US"

getResults(query);

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=imperial`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather) {
    const main_temp = weather.main.temp
    const conditions = weather.weather[0].main
    const wind_speed = (weather.wind.speed / 1.609).toFixed(1)
    let wind_chill = (35.74 + (0.6215 * main_temp) - (35.75 * (wind_speed ** 0.16)) + (0.4275 * main_temp * (wind_speed ** 0.16))).toFixed(0)
    const iconsrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const desc = weather.weather[0].description;
    const weatherIcon = document.querySelector('.icon')

    console.log(weather);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(main_temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.conditions');
    weather_el.innerText = conditions;

    let hilo = document.querySelector('.hi-low');
    hilo.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;

    let speed = document.querySelector('.speed');
    speed.innerText = `Wind Speed: ${wind_speed} mph`;

    let chill = document.querySelector('.chill');
    if (main_temp <= 50 && wind_speed > 3.0) {
        chill.innerText = `Wind Chill: ${wind_chill}°F`;
    } else {
        chill.innerText = `Wind Chill: N/A`;
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '100')

}
