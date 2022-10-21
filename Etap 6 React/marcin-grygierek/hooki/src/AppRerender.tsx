import {ChangeEvent, useState} from "react";

interface Props {
  items: string[]
  onDelete: (toDelete: number) => void;
}

const ItemsList = ({items, onDelete}: Props) => {
  return <ul>
    {items.map((item, index) => <li key={item}>{item}) <button onClick={()=> onDelete(index)}>usuń</button></li>)}
  </ul>
}

export const App = ()=> {
  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState<string>('')

  const handleDelete = (toDelete: number) => {
    setItems(prevItems => prevItems.filter((item, index) => index !== toDelete));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleChange}/>
      <ItemsList items={items} onDelete={handleDelete}/>;
    </div>
  )
}