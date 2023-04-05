import {CalculatorArithmeticButtons} from "./CalculatorArithmeticButtons";


export const CalculatorButton = () => {

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