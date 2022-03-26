import React from "react";
import "./Dialog.css"

export const Dialog = props => {
  return (
    <div className="Dialog__container">{props.body}</div>
  )
}