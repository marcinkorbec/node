import {ChangeEvent, createContext, useState} from "react";
import {CalculatorButton} from "./CalculatorButton";
import {CalculatorForm} from "./CalculatorForm";
import {CalculatorHistory} from "./CalculatorHistory";
import {CalculatorResult} from "./CalculatorResult";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

interface CalculatorContextType {

}

const CalculatorContext = createContext(null)

export const Calculator = () => {

  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [result, setResult] = useState<number | string>(0)
  const [history, setHistory] = useState<string[]>([])

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  }

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  }

  const setOperationResult = (operationResult: number | string)=> {
    setResult(operationResult);
  }

  const clearHistory = () => {
    setHistory([])
  }
  const addToHistory = (line: string) => {
    setHistory(prevHistory => [...prevHistory, line]);
  }



  return <div>
    <CalculatorForm
      first={first}
      second={second}
      handleFirstChange={handleFirstChange}
      handleSecondChange={handleSecondChange}
    />
    <CalculatorButton
      setOperationResult={setOperationResult}
      addToHistory={addToHistory}
      clearHistory={clearHistory}
      history={history}
      first={first}
      second={second}
    />
    <CalculatorResult
      result={result}
      first={first}
      second={second}
    />

    <CalculatorHistory storyOperation={history}/>
  </div>
};