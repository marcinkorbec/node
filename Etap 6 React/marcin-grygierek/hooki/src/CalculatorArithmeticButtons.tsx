import {Operation} from "./Calculator";

interface Props {
  setOperationResult: (result: number | string) => void;
  addToHistory: (line:string) => void;
  first: number;
  second: number;
  history: string[];
}

export const CalculatorArithmeticButtons = ({first, second, setOperationResult, addToHistory}: Props) => {
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