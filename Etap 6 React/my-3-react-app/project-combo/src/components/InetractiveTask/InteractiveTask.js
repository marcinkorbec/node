import React, {useState} from "react";
import "./InteractiveTask.css"

export const InteractiveTask = props => {
  const [color, setColor] = useState('')

  const changeColor = (e) => {
    setColor(e.target.value)
    console.log(color);
  }

  return (
    <>
      <div className="square" style={{backgroundColor: color}}></div>
      <div className="checkbox">
        <div className="checkbox">
          <label>
            <input type="radio" name="color" value="#3CB642FF" onChange={changeColor}/> Zielony <br/>
          </label>
          <label>
            <input type="radio" name="color" value="#66AFF8FF" onChange={changeColor}/> Niebieski <br/>
          </label>
          <label>
            <input type="radio" name="color" value="#F86666FF" onChange={changeColor}/> Czerwony <br/>
          </label>
          <div>
            <input type="color" name='color' value={color} onChange={changeColor}/>
          </div>
        </div>
        <form>
          <input type="text" name="color" value={color} onChange={changeColor}/>
        </form>
      </div>
    </>
  )
}

