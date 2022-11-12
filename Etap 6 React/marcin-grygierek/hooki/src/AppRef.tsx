export const AppRef = () => {

  const handleClick = () => {
    const element = document.querySelector('input')
    if (element) {
      element.focus();
    }
  }

  return <div>
    <input type="text"/>
    <button onClick={handleClick}>Kliknij mnie!</button>
  </div>
}