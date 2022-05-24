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
    console.log(weather);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector('.current .conditions');
    weather_el.innerText = weather.weather[0].main;

    let hilo = document.querySelector('.hi-low');
    hilo.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
}
