const today = new Date();
const year = today.getFullYear();
document.getElementById('copyYear').textContent = year;

const options = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.getElementById('todaysDate').textContent = new Date().toLocaleDateString('en-us', options);
