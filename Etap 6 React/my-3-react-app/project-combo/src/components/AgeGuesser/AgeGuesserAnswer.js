import React, {useEffect, useState} from "react";

export const AgeGuesserAnswer = props => {
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null)

  useEffect(async () => {
    try {
      setError(null);
      const response = await fetch(`https://api.agify.io/?name=${props.name}`);
      const data = await response.json();
      console.log(data);
      setAge(data.age);
    }
    catch(error) {
      setError('Błąd wczytywania!');
    }

  }, []);

  if (age === null) {
    return <p>Wczytywanie...</p>
  }

  return (
    <>
      <p>Twój wiek to: {age}</p>
      <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
  )
}