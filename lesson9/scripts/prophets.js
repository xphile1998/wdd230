const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let title = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    title.innerHTML = `${prophet.name}  ${prophet.lastname}`;
    birthdate.innerHTML = `Birthdate: ${prophet.birthdate}`;
    birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(title);
    card.appendChild(birthdate);
    card.appendChild(birthplace)
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

/* 
async function getProphets() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        buildProphetCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildProphetCards (data) {
    data.prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let fullname = '${prophet.name} ${prophet.last_name}';
        
        h2.innerHTML = '${prophet.name} ${prophet.last_name}';
        p.innerHTML = 'Location of Birth: ${prophet.birthplace}';
        img.setAttribute('src', prophet.imageurl);
        img.setAttribute('alt', 'Picture of President ${fullname}');
        img.setAttribute('loading', 'lazy');
        
        card.append(h2);
        card.appendChild(p);
        card.appendChild(img);
        
        card.append(card);
    });
}

getProphets();
*/