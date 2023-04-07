import { ChangeEvent, createContext, useState } from "react";
import { CalculatorButton } from "./CalculatorButton";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorResult } from "./CalculatorResult";

export enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

interface CalculatorContextType {
  first: number;
  second: number;
  result: number;
  history: string[];
  addToHistory: (line: string) => void;
  clearHistory: () => void;
  handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setOperationResult: (operationResult: number) => void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(null)

export const Calculator = () => {

  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [history, setHistory] = useState<string[]>([])

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  }

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  }

  const setOperationResult = (operationResult: number) => {
    setResult(operationResult);
  }

  const clearHistory = () => {
    setHistory([])
  }
  const addToHistory = (line: string) => {
    setHistory(prevHistory => [...prevHistory, line]);
  }



  return (
      <CalculatorContext.Provider value={{
        first,
        second,
        result,
        history,
        addToHistory,
        clearHistory,
        handleFirstChange,
        handleSecondChange,
        setOperationResult,
      }}>
        <CalculatorForm />
        <CalculatorButton />
        <CalculatorResult />
        <CalculatorHistory />
      </CalculatorContext.Provider>
  )
};