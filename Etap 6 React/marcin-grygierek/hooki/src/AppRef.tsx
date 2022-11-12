import {useRef, useState} from "react";

export const AppRef = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [random, setRandom] = useState<number>(0);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const randomize = () => {
    setRandom(Math.random() * 100);
  }

  return <div>
    <h1>{random}</h1>
    <input ref={inputRef} type="text"/>
    <button onClick={handleClick}>Kliknij mnie!</button>
    <button onClick={randomize}>Wylosuj!</button>
  </div>
}