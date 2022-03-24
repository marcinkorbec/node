import './App.css';
import {useState} from "react";

export const App = props => {
  const [firstName, setFirstName] = useState('')

  const changeFirstName = e => {
    setFirstName(e.target.value);
  }

  const backgroundColor = firstName[0] === '@' ? 'lime' : '#fab7b7';

  const sendForm = event => {
    event.preventDefault();
    console.log('Wysłano dane z formularza.', firstName);
  }

  return (
    <form onSubmit={sendForm}>
      <input
        name="firstName"
        value={firstName}
        onChange={changeFirstName}
        style={{backgroundColor: `${backgroundColor}`}}
      />
      <h1>{firstName}</h1>
      <p>Wpisałeś {firstName.length} znaków.</p>
      <button type="submit">Save</button>
    </form>
  );
}

// <UsersList users={People}/>

