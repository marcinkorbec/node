import { useContext } from "react";
import {CalculatorContext, Operation} from "./Calculator";


export const CalculatorArithmeticButtons = () => {
  const context = useContext(CalculatorContext);

  if (!context) return null;
  const {first, second, setOperationResult, addToHistory} = context;
  
  const handleOperation = (operation:Operation) => {
    switch (operation) {
      case Operation.ADD: {
        setOperationResult(first + second)
        addToHistory(`${first} + ${second} = ${first + second}`)
        break;
      }
      case Operation.SUBTRACT: {
        setOperationResult(first - second)
        addToHistory(`${first} - ${second} = ${first - second}`)
        break;
      }
      case Operation.MULTIPLY: {
        setOperationResult(first * second)
        addToHistory(`${first} * ${second} = ${first * second}`)
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          alert('Próbujesz podzielić przez zero!')
        }
        else {
          setOperationResult(first / second);
          addToHistory(`${first} / ${second} = ${first / second}`)
        }
        break;
      }
    }
  }
  return (
    <>
      <button onClick={() => handleOperation(Operation.ADD)}>+</button>
      <button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
      <button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
      <button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>
    </>
  )
}