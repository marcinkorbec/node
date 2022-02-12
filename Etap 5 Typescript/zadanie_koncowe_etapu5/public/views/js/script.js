const mainPage = document.querySelector("[href='/']");

const url = window.location.pathname;

if(url.includes('/')) {
	mainPage.classList.add('active');
}