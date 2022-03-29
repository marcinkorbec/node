import React, {useEffect, useState} from "react";
import "./CryptoPrice.css"
import {BinanceOneCryptoPairData} from "../../types/crypto-data";
import {Dialog} from "../common/Dialog/Dialog";
import { CryptoPriceOnePair } from "./CryptoPriceOnePair";


export const CryptoPrice = () => {
  const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null);
  const [pair, setPair] = useState<string>('')
  
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
        <select
          value={pair}
          onChange={e => setPair(e.target.value)}>
          {
            data.map(pair => (
                <option value={pair.symbol}
                        key={pair.symbol}
                >
                  {pair.symbol}
                </option>))
          }
        </select>
        <Dialog>
          {
            pair && <CryptoPriceOnePair onePair={data.find(one => one.symbol === pair) as BinanceOneCryptoPairData}/>
          }
        </Dialog>
      </label>
    </>
  )
}