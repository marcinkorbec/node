import {UsersList} from "../PersonList/UsersList";
import {People} from "../../data/people";
import './App.css';

export const App = props => {
  return (
      <UsersList users={People}/>
  );
}


