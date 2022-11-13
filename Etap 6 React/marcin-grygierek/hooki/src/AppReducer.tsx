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

  return <div>
    <h1>{user.name} {user.surname} ma {user.age} lat.</h1>

  </div>
}