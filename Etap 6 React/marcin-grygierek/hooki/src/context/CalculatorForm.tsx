import {ChangeEvent, useContext} from "react";
import {CalculatorContext} from "./Calculator";


export const CalculatorForm = () => {

  const context = useContext(CalculatorContext);

if (!context) return null;
  const {first, second, handleFirstChange, handleSecondChange} = context;
  return (
    <>
      <input type="number" value={first} onChange={handleFirstChange}/>
      <input type="number" value={second} onChange={handleSecondChange}/>
    </>
  )
}