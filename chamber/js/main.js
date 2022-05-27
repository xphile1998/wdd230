// Display the Last Modified Date of the page
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// display the date in UK style format: (day-of-the-week, day month year)
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Display the copyright year
const today = new Date();
const year = today.getFullYear();
document.getElementById('copyYear').textContent = year;

// Hamburger Button Click Behavior
function toggleMenu() {
    // console.log("It worked!");
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

//===================================================
// Below is the code needed to run the weather app
//===================================================

const api = {
    key: "e94c534dc62bfc23b1389cd61f78ca11",
    base: "https://api.openweathermap.org/data/2.5/"
}
const query = "Henderson, US"

getResults(query);

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=imperial`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    const main_temp = weather.main.temp
    const conditions = weather.weather[0].main
    const wind_speed = (weather.wind.speed / 1.609).toFixed(1)
    const wind_chill = (35.74 + (0.6215 * main_temp) - (35.75 * (wind_speed ** 0.16)) + (0.4275 * main_temp * (wind_speed ** 0.16))).toFixed(0)
    
    console.log(weather);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(main_temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .conditions');
    weather_el.innerText = conditions;

    let hilo = document.querySelector('.hi-low');
    hilo.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
    
    let speed = document.querySelector('#speed');
    speed.innerText = `Wind Speed: ${wind_speed} mph`;
    
    let chill = document.querySelector('#chill');
    chill.innerText = `Wind Chill: ${wind_chill}°F`
}
