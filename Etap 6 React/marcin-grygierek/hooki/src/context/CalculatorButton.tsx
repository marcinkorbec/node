import {CalculatorArithmeticButtons} from "./CalculatorArithmeticButtons";

interface Props {
  clearHistory: () => void;
  history: string[];
  setOperationResult: (result: number | string) => void;
  addToHistory: (line:string) => void;
  first: number;
  second: number;
}

export const CalculatorButton = ({clearHistory, history, first, second, setOperationResult, addToHistory}: Props) => {

  return (
    <>
      <CalculatorArithmeticButtons
        setOperationResult={setOperationResult}
        addToHistory={addToHistory}
        history={history}
        first={first}
        second={second}
      />
      <button onClick={clearHistory}>Wyczyść historię ({history.length})</button>
    </>
  )
}