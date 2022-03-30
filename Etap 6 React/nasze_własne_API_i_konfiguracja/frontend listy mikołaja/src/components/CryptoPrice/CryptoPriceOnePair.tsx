import React from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";

interface Props {
  onePair: BinanceOneCryptoPairData;
}


export const CryptoPriceOnePair = (props: Props)  => (
  <>
    <h1>Cena {props.onePair.symbol}: {props.onePair.lastPrice}</h1>
  </>
)