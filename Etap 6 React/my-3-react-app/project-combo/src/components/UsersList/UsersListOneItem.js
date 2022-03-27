import React from "react";
import {capitalizeFirstLetter} from "./CapitalizeFirstLetter";
import "./UsersList.css"

export const UsersListOneItem = props => {

  const oneUserClicked = () => {
    props.onRemoveItem(props.user.username);
  }

  return (
    <div className="user" onClick={oneUserClicked}>
      <img className="user_image"
           src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}/>
      <div className="user_name">
        <strong>{capitalizeFirstLetter(props.user.first_name)} {capitalizeFirstLetter(props.user.last_name)} </strong>
        <br/> <em>{props.user.username}</em>
      </div>
    </div>
  )
}