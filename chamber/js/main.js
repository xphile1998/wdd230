const today = new Date();
const year = today.getFullYear();
document.getElementById('copyYear').textContent = year;
/*
// const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour12: false, hour: '2-digit', minute: 'numeric', second: 'numeric'};
// document.getElementById('todaysDate').textContent = new Date().toLocaleDateString('en-us', options);
document.getElementById('lastModified').textContent = document.lastModified;
*/

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector(".date");
const datefield = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
