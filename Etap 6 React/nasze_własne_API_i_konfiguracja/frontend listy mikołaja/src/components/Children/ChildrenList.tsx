import React, {useEffect, useState} from "react";
import {ListChildrenRes} from "types";
import {Loading} from "../Loader/Loader";
import {ChildrenTable} from "./ChildrenTable";


export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);
  
  const refreshGifts = async () => {
    setData(null);
    const res = await fetch('http://localhost:3002/child');
    const dataResponse = await res.json()
    setData(dataResponse);
  };
  
  useEffect( () => {
    refreshGifts();
  }, [])
  
  
  if (data === null) {
    return <Loading/>
  }
  
  
  return (
    <>
      <h2>Prezenty</h2>
      <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>
  )
}

