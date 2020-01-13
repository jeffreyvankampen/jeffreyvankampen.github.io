const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('header nav');
const hamburgerlines = document.querySelector('#hamburger');
const lines = Array.from(document.querySelectorAll('#hamburger'));

hamburger.addEventListener('click', handleEvent);

function handleEvent() {
	hamburger.classList.toggle('animator');
	hamburger.classList.toggle('active');
	nav.classList.toggle('open');
}
