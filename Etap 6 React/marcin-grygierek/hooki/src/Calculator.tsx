import {ChangeEvent, useState} from "react";

enum Operation {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE
}

export const Calculator = () => {

  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const [storyOperation, setStoryOperation] = useState<string[]>([])

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  }

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  }

  const addToHistory = (line: string) => {
    setStoryOperation(prevHistory => [...prevHistory, line]);
  }

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

  return <div>
    <input type="number" value={first} onChange={handleFirstChange}/>
    <input type="number" value={second} onChange={handleSecondChange}/>

    <h1>{result}</h1>
    <button onClick={() => handleOperation(Operation.ADD)}>+</button>
    <button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
    <button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
    <button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>

    <ul>
      {storyOperation.map((line, index)=> <li key={index}>{line}</li>)}
    </ul>
  </div>
};