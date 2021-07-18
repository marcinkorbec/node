const getUsers = () => {
  const url = 'https://randomuser.me/api/?results=500&nat=es,de';

  fetch(url)//obietnica - oczekujący (pending)
    //obietnica - rozstrzygnięta (spełnione | odrzucone)
    //wykonuje się then - pozytywnie
    .then(response => {
      //(console.log(response));
      if (response.status !== 200) {
        throw Error('To nie jest odpowiedź 200!')
      } else {
        return response.json(); // fetch API = json() z body wyodrębnia json
      }
    })
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

document.querySelector('button').addEventListener('click',getUsers);