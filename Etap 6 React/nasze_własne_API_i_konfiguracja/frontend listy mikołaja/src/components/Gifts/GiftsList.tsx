import React, {useEffect, useState} from "react";
import "./Gifts.css"
import { GiftsTable } from "./GiftsTable";
import {GiftEntity} from "types";


export const GiftsList = () => {
  const [giftList, setGiftList] = useState<GiftEntity[] | null>(null);
  
  const refreshGifts = async () => {
    setGiftList(null);
    const res = await fetch('http://localhost:3002/gifts');
    const data = await res.json();
    console.log(data.giftsList)
    setGiftList(data.giftsList);
  };
  
  useEffect( () => {
    refreshGifts();
  }, [])
 
  
  if (giftList === null) {
   return <div className="loader"></div>
  }
  
  
  return (
    <>
      <h1>Prezenty</h1>
      <GiftsTable gifts={giftList} onGiftsChange={refreshGifts}/>
    </>
  )
}

