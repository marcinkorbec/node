import React, {useState} from "react";
import "./Form2.css"

export const Form2 = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)

  const sendForm = e => {
    e.preventDefault();

    const person = {
      firstName,
      lastName,
      age
    }
    console.log(person)
  }

  const changeFirstName = e => {
    setFirstName(e.target.value);
  }

  const changeLastName = e => {
    setLastName(e.target.value);
  }

  const changeAge = e => {
    setAge(Number(e.target.value));
  }


  return (
    <form onSubmit={sendForm}>
      <p>
        <label>
          Imię: <br/>
          <input type="text" value={firstName} onChange={changeLastName}/>
        </label>
      </p>
      <p>
        <label>
          Nazwisko: <br/>
          <input type="text" value={lastName} onChange={changeLastName}/>
        </label>
      </p>
      <p>
        <label>
        Wiek: <br/>
        <input type="text" value={age} onChange={changeAge}/>
      </label>
      </p>
      <p>
        <button type="submit">Wyślij</button>
      </p>
    </form>
  )
}