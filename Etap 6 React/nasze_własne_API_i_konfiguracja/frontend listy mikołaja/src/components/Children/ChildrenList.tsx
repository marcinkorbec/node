import React, {useEffect, useState} from "react";
import {ListChildrenRes} from "types";
import {Loading} from "../Loader/Loader";
import {ChildrenTable} from "./ChildrenTable";


export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);
  
  const refreshGifts = async () => {
    setData(null);
    const res = await fetch('http://localhost:3002/child');
    const data = await res.json();
    setData(data.data);
  };
  
  useEffect( () => {
    refreshGifts();
  }, [])
  
  
  if (data === null) {
    return <Loading/>
  }
  
  
  // @ts-ignore
  return (
    <>
      <h2>Prezenty</h2>
      <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>
  )
}

