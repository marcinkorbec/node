import { useContext } from "react"
import { CalculatorContext } from "./Calculator";

export const CalculatorResult = () => {
  const context = useContext(CalculatorContext);
  if (!context) return null;
  const {result, first, second} = context;
  return (
    <>
      <h1>{result}</h1>
      <p>Dla wartości {first} i {second}</p>
    </>

  )
}