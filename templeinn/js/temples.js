const requestURL = 'json/temples.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const temples = jsonObject['templeList'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templePic = document.createElement('img');
    let name = document.createElement('h2'); 
    let address = document.createElement('div');
    let contact = document.createElement('div')
    let schedules = document.createElement('div');
    let services = document.createElement('div');
    let history = document.createElement('div');
        
    // Change the textContent property of the elements
    name.innerHTML = `${temple.name}`;
    address.innerHTML = `<p>${temple.address.street}<br>
                         ${temple.address.city}, ${temple.address.state} ${temple.address.zip}<br>
                         ${temple.address.country}</p>`;
    contact.innerHTML = `<legend class="templeCardLeg">Contact Information</legend>
                         <p class="templePara">Phone: ${temple.contact.phone}<br>
                         Email: ${temple.contact.email}</p>`;
    schedules.innerHTML = `<fieldset class="templeCard">
                                <legend class="templeCardLeg">Schedules</legend>
                                <p class="templePara">Ordinances: ${temple.schedules.ordinanceSchedule}</p>
                                <p class="templePara">Sessions: ${temple.schedules.sessionSchedule}</p>
                            </fieldset>
                            <fieldset class="templeCard">
                                <legend class="templeCardLeg">Closure Schedule</legend>
                                <ul>
                                    <li class=templeLi>${temple.schedules.closureSchedule.closure1}</li>
                                    <li class=templeLi>${temple.schedules.closureSchedule.closure2}</li>
                                    <li class=templeLi>${temple.schedules.closureSchedule.closure3}</li>
                                    <li class=templeLi>${temple.schedules.closureSchedule.closure4}</li>
                                    <li class=templeLi>${temple.schedules.closureSchedule.closure5}</li>
                                </ul>
                            </fieldset>`
    services.innerHTML = `<legend class="templeCardLeg">Temple Services</legend>
                          <p class="templePara">${temple.services.service1}<br>
                          ${temple.services.service2}<br>
                          ${temple.services.service3}<br>
                          ${temple.services.service4}</p>`;
    history.innerHTML = `<legend class="templeCardLeg">Temple History</legend> 
                         <p class="templePara">${temple.history.announced}<br>
                         Groundbreaking: ${temple.history.groundbreaking}<br>
                         Dedication: ${temple.history.dedication}</p>`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    templePic.setAttribute('class', 'templePic');
    templePic.setAttribute('src', temple.templePicURL);
    templePic.setAttribute('alt', `Picture of the ${temple.name} temple.`);
    templePic.setAttribute('loading', 'lazy');
    
    card.setAttribute('class', 'tempCard');
    name.setAttribute('class', 'name');
    address.setAttribute('class', 'address');
    contact.setAttribute('class', 'contact');
    schedules.setAttribute('class', 'schedules');
    services.setAttribute('class', 'services');
    history.setAttribute('class', 'history');
        
    // Add/append the section(card) with the h2 element
    card.appendChild(templePic);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(contact);
    card.appendChild(schedules);
    card.appendChild(services);
    card.appendChild(history);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}