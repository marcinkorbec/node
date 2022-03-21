import {UsersList} from "../UsersList/UsersList";
import {People} from "../../data/people";
import './App.css';

export const App = props => {
  return (
      <UsersList users={People}/>
  );
}


