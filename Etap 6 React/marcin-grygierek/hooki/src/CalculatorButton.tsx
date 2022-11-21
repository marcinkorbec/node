import { Operation } from "./Calculator";

interface Props {
  handleOperation: (operation: Operation) => void;
}

export const CalculatorButton = ({handleOperation}: Props) => {
  const handleOperation = (operation:Operation) => {
    switch (operation) {
      case Operation.ADD: {
        setResult(first + second)
        addToHistory(`${first} + ${second} = ${first + second}`)
        break;
      }
      case Operation.SUBTRACT: {
        setResult(first - second)
        addToHistory(`${first} - ${second} = ${first - second}`)
        break;
      }
      case Operation.MULTIPLY: {
        setResult(first * second)
        addToHistory(`${first} * ${second} = ${first * second}`)
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          alert('Próbujesz podzielić przez zero!')
        }
        else {
          setResult(first / second);
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