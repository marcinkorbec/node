

export const CalculatorHistory = () => {
  return (
    <ul>
      {storyOperation.map((line, index)=> <li key={index}>{line}</li>)}
    </ul>
  )
}