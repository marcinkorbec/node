import React, {useState} from "react";

export const AgeGuesser = props => {
  const [age, setAge] = useState(null)

  return (
    <>
      <p>Twój wiek to: {age}</p>
      <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
  )
}