import React, {useState} from "react";
import {AgeGuesserAnswer} from "./AgeGuesserAnswer";


export const AgeGuesser = props => {
  const [name, setName] = useState('');
  const [check, setCheck] = useState(false);

  const sendform = event => {
    event.preventDefault();
    setCheck(true);
  }

  if (check) {
    return <AgeGuesserAnswer name={name}/>;
  }

  return (
    <form onSubmit={sendform}>
      <label>
        Podaj imię:<br/>
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <button type="submit">Zgadnij mój wiek.</button>
      </label>
    </form>
  )
}

