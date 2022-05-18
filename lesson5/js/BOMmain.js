
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener("click", function() {

    let value = input.value;

    let liList = document.getElementsByTagName('li').length+1;

    if (!value.trim()) {
		console.log('Nothing was entered.');

    } else if (liList > 25) {
		alert('You have reached the maximum input size of 25 characters.');


    } else {

        const liNew = document.createElement('li');
		const buttonNew = document.createElement('button');

		buttonNew.className = 'delete-button';

		liNew.textContent = value;
		buttonNew.textContent = 'X';

		list.appendChild(liNew).appendChild(buttonNew);

		buttonNew.onclick = function () {
			list.removeChild(liNew);
		};
	}

    input.focus();

	input.value = '';
});
