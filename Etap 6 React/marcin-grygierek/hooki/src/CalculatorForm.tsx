import {ChangeEvent} from "react";

interface Props {
  first: number;
  second: number;
  handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CalculatorForm = ({first, second, handleFirstChange, handleSecondChange}: Props) => {
  return (
    <>
      <input type="number" value={first} onChange={handleFirstChange}/>
      <input type="number" value={second} onChange={handleSecondChange}/>
    </>
  )
}