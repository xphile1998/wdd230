// Display the Last Modified Date of the page
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// display the date in UK style format: (day-of-the-week, day month year)
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
const todayDisplay = document.querySelector("#today");

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

/* 
let this_visit = Date.now();
let last_visit = Number(window.localStorage.getItem("last_visit"));
days_since = this_visit - last_visit;

todayDisplay.textContent = days_since;

localStorage.setItem("last_visit", this_visit);
*/ 