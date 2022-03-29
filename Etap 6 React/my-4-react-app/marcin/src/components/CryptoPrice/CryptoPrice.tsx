import React, {useEffect, useState} from "react";
import "./CryptoPrice.css"


export const CryptoPrice = () => {
  const [data, setData] = useState(null);
  
  useEffect(()=> {
    (async (): Promise<void> => {
      const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
      const data = await response.json();
      setData(data);
      
      console.log(data)
    })();
  }, [])
  
  if (data === null) {
    return <div className="loader"></div>
  
  }
  
  return (
    <>
      <label>
        Wybierz parę kryptowalutową: <br/>
        <select>
          <div className="loader"></div>
        </select>
      </label>
    </>
  )
}