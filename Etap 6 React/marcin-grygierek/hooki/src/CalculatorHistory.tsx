interface Props {
  storyOperation: string[];
}

export const CalculatorHistory = ({storyOperation}: Props) => {
  return (
    <ul>
      {storyOperation.map((line, index)=> <li key={index}>{line}</li>)}
    </ul>
  )
}