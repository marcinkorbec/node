import React, {useEffect, useState} from "react";
import {GetSingleGiftRes} from "types";
import {Link, useParams} from "react-router-dom";

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes| null>(null);
  const {idOfGift} = useParams();
  
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3002/gift/${idOfGift}`);
      const data = await res.json()
      console.log(data)
      setGiftInfo(data);
    })();
  }, [])

  if (giftInfo === null) {
    return null;
  }
  
  return (
    <>
      <h2>{giftInfo.giftItem.name}</h2>
      <p>Ten prezent ma ID <strong style={{color: 'limegreen'}}>{giftInfo.giftItem.id}</strong> <strong> i jest go {giftInfo.giftItem.count} sztuk.</strong></p>
      <p>
        <Link to={'/gift'}>Wstecz</Link>
      </p>
    </>
  )
}