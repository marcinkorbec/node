import {useState} from "react";

export const Agreement = props => {
  const [agreement, setAgreement] = useState(false)

  const changeAgreement = () => {
    !agreement ? setAgreement(true) : setAgreement(false);
  }

  const sendForm = event => {
    event.preventDefault();
    console.log(agreement);
  }

  return (
    <form onSubmit={sendForm}>
      <label>
        <input
          type="checkbox"
          checked={agreement}
          onChange={changeAgreement}
        /> Zaakceptuj RODO aby przejść dalej.
      </label>
      <p>Wpisałeś {agreement.length} znaków.</p>
      <button type="submit">Save</button>
    </form>
  );
}