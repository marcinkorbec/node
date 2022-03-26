import React from "react";
import "./Dialog.css"

export const Dialog = props => {
  return (
    <div className="Dialog__container">
      <div className="Dialog__title">{props.title}</div>
      <div className="Dialog__content">{props.children}</div>
    </div>
  )
}