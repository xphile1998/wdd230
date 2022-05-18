// gets the elements on the page
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// listens for the button click to add list item
button.addEventListener("click", function() {
    // stores input value
    let value = input.value;
    // stores total number of li in ul
    let liCount = document.getElementsByTagName('li').length+1;
    // verifies that a value was entered
    if (!value.trim()) {
        console.log('nothing was entered');
    // alert the user if they reach 25 entires
    } else if (liCount > 25) {
        alert('You have reached the max number of 25.' +
        ' Please remove one beefore adding another item.');
    // creates and adds new li
    } else {
        // creates elements to add to the list
        const liNew = document.createElement('li');
        const btnNew = document.createElement('button');
        // add class for styling later
        btnNew.className = 'delete-btn';
        // set values of elements
        liNew.textContent = value;
        btnNew.textContent = 'X';
        // add elements to the page
        list.appendChild(liNew).appendChild(btnNew);
        // listens for remove click and removes the related li
        btnNew.onclick = function() {
            list.removeChild(liNew);
        }
    }
    // sets the focus back to the input field
    input.focus();
    // clears the input field
    input.value = '';
});