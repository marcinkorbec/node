import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {AddToHistory, setResult} from "./actions/calculator";
import {Operation} from "./Calculator";

export const CalculatorArithmeticButtons = () => {
  const dispatch = useDispatch();
  const {first, second} = useSelector((store: RootState) => store.calculator);

  const handleSetOperationResult = (result: string | number) => {
    dispatch(setResult(result));
  }

  const handleAddToHistory = (line: string) => {
    dispatch(AddToHistory(line));
  }

  const handleOperation = (operation:Operation) => {
    switch (operation) {
      case Operation.ADD: {
        handleSetOperationResult(first + second)
        handleAddToHistory(`${first} + ${second} = ${first + second}`)
        break;
      }
      case Operation.SUBTRACT: {
        handleSetOperationResult(first - second)
        handleAddToHistory(`${first} - ${second} = ${first - second}`)
        break;
      }
      case Operation.MULTIPLY: {
        handleSetOperationResult(first * second)
        handleAddToHistory(`${first} * ${second} = ${first * second}`)
        break;
      }
      case Operation.DIVIDE: {
        if (second === 0) {
          alert('Próbujesz podzielić przez zero!')
        }
        else {
          handleSetOperationResult(first / second);
          handleAddToHistory(`${first} / ${second} = ${first / second}`)
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