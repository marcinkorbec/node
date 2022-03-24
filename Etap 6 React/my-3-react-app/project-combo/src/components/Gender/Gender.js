import {useState} from "react";

export const Gender = props => {
  const [gender, setGender] = useState('M')

  const changeGender = e => {
    setGender(e.target.value);
  }

  const sendForm = event => {
    event.preventDefault();
    console.log(gender);
  }

  return (
    <form onSubmit={sendForm}>
      <select
        name="gender"
        onChange={changeGender}
        value={gender}
      >
        <option value="">-Wybierz-</option>
        <option value="K">Kobieta</option>
        <option value="M">Mężczyzna</option>
      </select>
      <p>Wpisałeś {gender.length} znaków.</p>
      <button type="submit">Save</button>
    </form>
  );
}