const mainPageLink = document.querySelector("[href='/home']");
const newWarriorLink = document.querySelector('[href="/warrior/register"]');
const hallFameLink = document.querySelector('[href="/hall-of-fame/fame"]');
const arenaLink = document.querySelector('[href="/arena/fight-form"]');

const url = window.location.pathname;

if(url.includes('/home')) {
	mainPageLink.classList.add('active');
}

if(url.includes('/warrior/register')) {
	newWarriorLink.classList.add('active');
}

if(url.includes('/hall-of-fame/fame')) {
	hallFameLink.classList.add('active');
}

if(url.includes('/arena/fight-form')) {
	arenaLink.classList.add('active');
}