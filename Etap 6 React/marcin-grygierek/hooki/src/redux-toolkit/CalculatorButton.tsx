import { CalculatorArithmeticButtons } from "./CalculatorArithmeticButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {clearHistory} from "./features/calculator/calculator-slice";


export const CalculatorButton = () => {
  const dispatch = useDispatch();
const {history} = useSelector((store: RootState) => store.calculator);

const handleClear = () => {
  dispatch(clearHistory());
}
  return (
    <>
      <CalculatorArithmeticButtons />
      <button onClick={handleClear}>Wyczyść historię ({history.length})</button>
    </>
  )
}