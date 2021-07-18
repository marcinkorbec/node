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
    .then(json => console.log(json.results))
    .catch(err => console.log(err))
    
}

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  users.forEach(user => {
    console.log(user);
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `
    div class="user_name">${user.name.title.toUppercase()} ${user.name.first.toUppercase()} ${user.name.last.toUppercase()}</div>
    <img class="user_image" src=${user.picture.medium}>`
    console.log(item)
    resultArea.appendChild(item);
  });
}
document.querySelector('.generator').addEventListener('submit', getUsers);
document.querySelector('.generator').addEventListener('submit', showUsers);