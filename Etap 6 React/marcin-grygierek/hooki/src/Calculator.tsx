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

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirst(Number(e.target.value));
  }
  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecond(Number(e.target.value));
  }

  const handleOperation = (operation:Operation) => {
    switch (operation) {
      case Operation.ADD: {
        setResult(first + second)
      }
      case Operation.SUBTRACT: {
        setResult(first - second)
      }
      case Operation.MULTIPLY: {
        setResult(first * second)
      }
      case Operation.DIVIDE: {
        setResult(first / second)
      }
    }
  }

  return <div>
    <input type="number" value={first}/>
    <input type="number" value={second}/>

    <h1>{result}</h1>
    <button>+</button>
    <button>-</button>
    <button>*</button>
    <button>/</button>

    <ul>
      <li></li>
    </ul>
  </div>
}