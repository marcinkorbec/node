import { useContext } from "react";
import { CalculatorArithmeticButtons } from "./CalculatorArithmeticButtons";
import { CalculatorContext } from "./Calculator";


export const CalculatorButton = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;
  const {history, clearHistory } = context;

  return (
    <>
      <CalculatorArithmeticButtons />
      <button onClick={clearHistory}>Wyczyść historię ({history.length})</button>
    </>
  )
}