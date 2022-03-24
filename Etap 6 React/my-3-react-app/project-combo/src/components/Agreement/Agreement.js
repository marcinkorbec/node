import {useState} from "react";

export const Agreement = props => {
  const [agreement, setAgreement] = useState('M')

  const changeAgreement = e => {
    setAgreement(e.target.value);
  }

  const sendForm = event => {
    event.preventDefault();
    console.log(agreement);
  }

  return (
    <form onSubmit={sendForm}>
      <input type="checkbox"/>
       zaakceptuj RODO aby przejść dalej
      <p>Wpisałeś {agreement.length} znaków.</p>
      <button type="submit">Save</button>
    </form>
  );
}