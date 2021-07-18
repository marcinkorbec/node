const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const usersGender = document.querySelector('[name="gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&de&gender=${usersGender === "both" ? "male,female" : usersGender}`;
 if (usersNumber >= 1) {
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
    .then(json => showUsers(json.results))
    .catch(err => console.log(err))
  }  
}

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  users.forEach(user => {
    console.log(user);
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `<img class="user_image" src=${user.picture.medium}>
    <div class="user_name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    `
    console.log(item)
    resultArea.appendChild(item);
  });
}
document.querySelector('.generator').addEventListener('submit', getUsers);
