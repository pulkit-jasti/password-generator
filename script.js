let length = document.getElementById('length');

let numbers = document.getElementById('numbers');
let upperCase = document.getElementById('upper-case');
let specialChar = document.getElementById('special-characters');

length.addEventListener('input', () => {
	console.log(length.value);
});

numbers.addEventListener('input', () => {
	console.log(numbers.checked);
});

upperCase.addEventListener('input', () => {
	console.log(upperCase.checked);
});

specialChar.addEventListener('input', () => {
	console.log(specialChar.checked);
});
