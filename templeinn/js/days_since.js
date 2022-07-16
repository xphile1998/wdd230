let this_visit = Date.now();
let last_visit = Number(window.localStorage.getItem("last_visit"));
let days_since = (this_visit - last_visit) / (1000 * 60 * 60 * 24);

todayDisplay.textContent = days_since;

localStorage.setItem("last_visit", this_visit);