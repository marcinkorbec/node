import {ChangeEvent, useState} from "react";
import {CalculatorButton} from "./CalculatorButton";
import {CalculatorForm} from "./CalculatorForm";
import {CalculatorHistory} from "./CalculatorHistory";
import {CalculatorResult} from "./CalculatorResult";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE
}

export const Calculator = () => {

  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [result, setResult] = useState<number | string>(0)
  const [storyOperation, setStoryOperation] = useState<string[]>([])

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  }

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  }

  const setOperationResult = (operationResult: number | string)=> {
    setResult(operationResult);
  }

  const addToHistory = (line: string) => {
    setStoryOperation(prevHistory => [...prevHistory, line]);
  }



  return <div>
    <CalculatorForm
      first={first}
      second={second}
      handleFirstChange={handleFirstChange}
      handleSecondChange={handleSecondChange}
    />
    <CalculatorButton handleOperation={handleOperation}/>
    <CalculatorResult result={result}/>

    <CalculatorHistory storyOperation={storyOperation}/>
  </div>
};