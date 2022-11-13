import {useRef, useState} from "react";

export const AppRef = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const randomRef = useRef<number | null>(null)
  const [random, setRandom] = useState<number>(0);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const randomize = () => {
    randomRef.current = random;
    setRandom(Math.floor(Math.random() * 1000));
  }

  return <div>
    <h1>{random}</h1>
    {randomRef.current && <h2>{Math.abs(randomRef.current - random)}</h2>}
    <input ref={inputRef} type="text"/>
    <button onClick={handleClick}>Kliknij mnie!</button>
    <button onClick={randomize}>Wylosuj!</button>
  </div>
}