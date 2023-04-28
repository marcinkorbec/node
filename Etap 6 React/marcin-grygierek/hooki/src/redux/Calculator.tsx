import { CalculatorButton } from "./CalculatorButton";
import { CalculatorForm } from "./CalculatorForm";
import { CalculatorHistory } from "./CalculatorHistory";
import { CalculatorResult } from "./CalculatorResult";
import { Provider } from "react-redux";
import { store } from "./store";

export const Calculator = () => {
  return (
      <Provider store={store}>
        <CalculatorForm />
        <CalculatorButton />
        <CalculatorResult />
        <CalculatorHistory />
      </Provider>
  )
};