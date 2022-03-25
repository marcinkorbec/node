import React, {useState} from "react";
import "./Form2.css"

export const Form2 = props => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    age: '',
  })


  const sendForm = e => {
    e.preventDefault();
    console.log(person)
  }

  function setName(e){
    setPerson(person => ({
      ...person,
      firstName: e.target.value,
    }));
  }

  function setLastName(e) {
    setPerson(person => ({
      ...person,
      lastName: e.target.value,
    }));
  }

  function setAge(e) {
    setPerson(person => ({
      ...person,
      age: Number(e.target.value),
    }));
  }




  return (
    <form onSubmit={sendForm}>
      <p>
        <label>
          Imię: <br/>
          <input type="text" value={person.firstName} onChange={setName}/>
        </label>
      </p>
      <p>
        <label>
          Nazwisko: <br/>
          <input type="text" value={person.lastName} onChange={setLastName}/>
        </label>
      </p>
      <p>
        <label>
        Wiek: <br/>
        <input type="text" value={person.age} onChange={setAge}/>
      </label>
      </p>
      <p>
        <button type="submit">Wyślij</button>
      </p>
    </form>
  )
}