const h1 = document.querySelector('h1');
const personInfo = localStorage.getItem('person-info');

if (personInfo === null) {
 const name = prompt('wpisz swoje imie');
 const surname = prompt('wpisz swoje nazwisko');
 const person = {
   name,
   surname,
 }
  localStorage.setItem('person-info', JSON.stringify(person));
} else {
  const person = JSON.parse(personInfo);
  const {name, surname} = person;
  h1.innerText = `${name} ${surname}`;
};

