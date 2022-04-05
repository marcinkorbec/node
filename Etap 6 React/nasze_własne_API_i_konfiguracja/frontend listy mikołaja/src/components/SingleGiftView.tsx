import React, {useEffect, useState} from "react";
import {GetSingleGiftRes} from "types";
import {useParams} from "react-router-dom";

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes| null>(null);
  const {idOfGift} = useParams();
  
  console.log(giftInfo)
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/gift/${idOfGift}`);
      setGiftInfo(await res.json());
    })()
  })

  if (giftInfo === null) {
    return null;
  }
  
  return (
    <>
      <h2>{giftInfo.giftItem.name}</h2>
      <p>Ten prezent ma ID <strong>{giftInfo.giftItem.id} i jest go {giftInfo.giftItem.count} sztuk.</strong></p>
    </>
  )
}