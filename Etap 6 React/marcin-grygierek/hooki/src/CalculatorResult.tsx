interface Props {
  result: number | string;
}

export const CalculatorResult = ({result}: Props) => {
  return (
    <h1>{result}</h1>
  )
}