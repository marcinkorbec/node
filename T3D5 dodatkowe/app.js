const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name="users-number"]').value;
  const usersGender = document.querySelector('[name="gender"]').value;
  console.log(usersNumber, usersGender);
  const url = `https://randomuser.me/api/?results=${usersNumber}&de&gender=${usersGender === "both" ? "male,female" : usersGender}`;

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

document.querySelector('.generator').addEventListener('submit',getUsers);