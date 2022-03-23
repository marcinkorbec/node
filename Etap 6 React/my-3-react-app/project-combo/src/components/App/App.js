import {UsersList} from "../UsersList/UsersList";
import {People} from "../../data/people";
import './App.css';
import {useState} from "react";

export const App = props => {
  const [firstName, setFirstName] = useState('')

  const changeFirstName = e => {
    setFirstName(e.target.value);
  }

  const backgroundColor = firstName[0] === '@' ? 'lime' : '#fab7b7';

  return (
    <>
      <input type="password" value={firstName} onChange={changeFirstName} style={{backgroundColor: `${backgroundColor}`}}/>
      <h1>{firstName}</h1>
      <p>Wpisałeś {firstName.length} znaków.</p>
    </>
  );
}

// <UsersList users={People}/>

