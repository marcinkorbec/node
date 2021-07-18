const getUsers = () => {
  const url = 'https://randomuser.me/api/?results=50&gender=female&nat=es,de';
  fetch(url)
    .then(response => (console.log(response)))
    .catch(err => console.log(err))

}

document.querySelector('button').addEventListener('click',getUsers);