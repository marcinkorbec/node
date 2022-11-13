import {useReducer, useState} from "react";

interface User {
  name: string;
  surname: string;
  age: number;
}

interface ChangeNameAction {
  type: 'CHANGE_NAME';
  payload: string;
}

interface ChangeSurnameAction {
  type: 'CHANGE_SURNAME';
  payload: string;
}

interface ChangeAgeAction {
  type: 'CHANGE_AGE';
  payload: number;
}

type UserAction = ChangeSurnameAction | ChangeNameAction | ChangeAgeAction;

const initialState: User = {
  name:'Marcin',
  surname: 'Korbecki',
  age: 34,
}

const userReducer = (state:User, action:UserAction) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.payload
      }
    }
    case 'CHANGE_SURNAME': {
      return {
        ...state,
        surname: action.payload
      }
    }
    case 'CHANGE_AGE': {
      return {
        ...state,
        age: state.age + action.payload,
      }
    }
    default:
      return state;
  }
}
export const AppReducer2 = () => {
  const [user, dispatch]= useReducer(userReducer, initialState);



  return <div>
    <h1>{user.name} {user.surname} ma {user.age} lat.</h1>
    <button onClick={() => dispatch({type: "CHANGE_NAME", payload: 'Maria'})}>Zmień imię</button>
    <button onClick={() => dispatch({type: "CHANGE_SURNAME", payload: 'Korbecka'})}>Zmień nazwisko</button>
    <button onClick={() => dispatch({type: "CHANGE_AGE", payload: 1})}>Postarz</button>
  </div>
}