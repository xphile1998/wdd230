// const today = new Date();
// const year = today.getFullYear();
// document.getElementById('copyYear').textContent = year;

// const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour12: false, hour: '2-digit', minute: 'numeric', second: 'numeric'};
// document.getElementById('todaysDate').textContent = new Date().toLocaleDateString('en-us', options);
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// display the date in UK style format: (day-of-the-week, day month year)

const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
