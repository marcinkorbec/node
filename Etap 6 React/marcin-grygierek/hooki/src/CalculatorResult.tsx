interface Props {
  result: number | string;
  first: number;
  second: number;
}

export const CalculatorResult = ({result, first, second}: Props) => {
  return (
    <>
      <h1>{result}</h1>
      <p>Dla wartości {first} i {second}</p>
    </>

  )
}