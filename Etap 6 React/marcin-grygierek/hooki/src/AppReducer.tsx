import {useState} from "react";

interface User {
  name: string;
  surname: string;
  age: number;
}

export const AppReducer = () => {
  const [user, setUser]= useState<User>({
    name:'Marcin',
    surname: 'Korbecki',
    age: 34,
  })

  const changeName = (name: string) => {
    setUser(prevUser => ({
      ...prevUser,
      name
    }))
  }

  const changeSurname = (surname: string) => {
    setUser(prevUser => ({
      ...prevUser,
      surname
    }))
  }

  const changeAge = () => {
    setUser(prevUser => ({
      ...prevUser,
      age: prevUser.age + 1,
    }))
  }


  return <div>
    <h1>{user.name} {user.surname} ma {user.age} lat.</h1>
    <button onClick={()=> changeName('Maria')}>Zmień imię</button>
    <button onClick={() => changeSurname('Korbecka')}>Zmień nazwisko</button>
    <button onClick={() => changeAge()}>Postarz</button>
  </div>
}