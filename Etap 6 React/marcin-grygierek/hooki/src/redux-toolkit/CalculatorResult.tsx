import {useSelector} from "react-redux";
import {RootState} from "./store";

export const CalculatorResult = () => {
  const {first, second, result} = useSelector((store: RootState) => store.calculator);

  return (
    <>
      <h1>{result}</h1>
      <p>Dla wartości {first} i {second}</p>
    </>

  )
}