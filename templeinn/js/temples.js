const requestURL = 'json/temples.json';
// const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const temples = jsonObject['templeList'];
        temples.forEach(displayBusinesses);
    });

function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let pic = document.createElement('img');
    let tname = document.createElement('h2'); 
    let bdescription = document.createElement('h3');
    let cname = document.createElement('p');
    let title = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let joined = document.createElement('h4');

    // Change the textContent property of the h2 element to contain the prophet's full name
    bname.innerHTML = `${business.business_name}`
    bdescription.innerHTML = `${business.business_description}`
    cname.innerHTML = `Contact Name: ${business.first_name}  ${business.last_name}`;
    title.innerHTML = `Contact Title: ${business.contact_title}`
    phone.innerHTML = `Phone: ${business.contact_phone}`;
    email.innerHTML = `Email: ${business.contact_email}`;
    joined.innerHTML = `${business.business_name} joined the Chamber in ${business.joined}!`

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.business_name}`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(bname);
    card.appendChild(bdescription);
    card.appendChild(cname);
    card.appendChild(title);
    card.appendChild(phone);
    card.appendChild(email)
    card.appendChild(joined);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}