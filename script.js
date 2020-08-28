let length = document.getElementById('length');

let numbers = document.getElementById('numbers');
let upperCase = document.getElementById('upper-case');
let specialChar = document.getElementById('special-characters');

let form = document.getElementById('form');

const lowercaseList = arrayGenerator(97, 122);
const uppercaseList = arrayGenerator(65, 90);
const numbersList = arrayGenerator(48, 57);
const symbolsList = arrayGenerator(33, 47).concat(arrayGenerator(58, 64)).concat(arrayGenerator(91, 96));

let password = '';

form.addEventListener('submit', e => {
	e.preventDefault();
	password = generatePassword();
	document.getElementById('display').value = password;

	copyToClipboard('hell its working');
});

document.getElementById('copy').addEventListener('click', () => {
	copyToClipboard(password);
	document.getElementById('display').value = 'copied';
	setTimeout(() => {
		document.getElementById('display').value = password;
	}, 2000);
});

function generatePassword() {
	let allChar = lowercaseList;
	if (numbers.checked) allChar = allChar.concat(numbersList);
	if (upperCase.checked) allChar = allChar.concat(uppercaseList);
	if (specialChar.checked) allChar = allChar.concat(symbolsList);
	//console.log(allChar);

	let array = [];

	for (let i = 0; i <= length.value; i++) {
		array.push(String.fromCharCode(allChar[Math.floor(Math.random() * allChar.length)]));
	}

	//console.log(array.join(''));
	return array.join('');
}

function arrayGenerator(low, high) {
	const array = [];
	for (let i = low; i <= high; i++) {
		array.push(i);
	}
	return array;
}

function copyToClipboard(copyClip) {
	const el = document.createElement('textarea');
	el.value = copyClip;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}
