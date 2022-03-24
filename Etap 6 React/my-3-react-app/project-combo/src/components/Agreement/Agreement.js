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
      <select
        name="gender"
        onChange={changeAgreement}
        value={agreement}
      >
        <option value="">-Wybierz-</option>
        <option value="K">Kobieta</option>
        <option value="M">Mężczyzna</option>
      </select>
      <p>Wpisałeś {agreement.length} znaków.</p>
      <button type="submit">Save</button>
    </form>
  );
}