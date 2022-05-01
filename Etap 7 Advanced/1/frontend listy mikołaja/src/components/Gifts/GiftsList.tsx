import React, {useEffect, useState} from "react";
import "./Gifts.css"
import { GiftsTable } from "./GiftsTable";
import {GiftEntity} from "types";
import {Loading} from "../Loader/Loader";

type DataType = {
  data: GiftEntity[];
}

export const GiftsList = () => {
  const [giftList, setGiftList] = useState<GiftEntity[] | null>(null);
  
  const refreshGifts = async () => {
    setGiftList(null);
    const res = await fetch('http://localhost:3002/gifts');
    const data = await res.json();
    console.log(data)
    setGiftList(data.giftsList);
  };
  
  useEffect( () => {
    refreshGifts();
  }, [])
 
  
  if (giftList === null) {
   return <Loading/>
  }
  
  
  return (
    <>
      <h2>Prezenty</h2>
      <GiftsTable gifts={giftList} onGiftsChange={refreshGifts}/>
    </>
  )
}

