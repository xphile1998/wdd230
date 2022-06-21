const requestURL = 'json/wireframes.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const wireframes = jsonObject['wireframes'];
        wireframes.forEach(displayWireframes);
    });

function displayWireframes(wireframe) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let picture = document.createElement('img');
    let description = document.createElement('h2');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    description.innerHTML = `${wireframe.description}`
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', wireframe.picURL);
    picture.setAttribute('alt', `${wireframe.description}`);
    picture.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(description);
    card.appendChild(picture);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}