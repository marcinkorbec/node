import React, {MouseEvent, useEffect, useState} from "react";
import {GiftEntity} from "types";


interface Props {
  gift: GiftEntity;
  index: number;
  onGiftsChange: () => void;
}



export const GiftTableRow = (props: Props) => {
  const deleteGift = async (event: MouseEvent) => {
    event.preventDefault();
    
    if(!window.confirm(`Czy jesteś pewny że chcesz usunąć ${props.gift.name}?`)) {
      return;
    }
    
    const res = await fetch(`http://localhost:3002/${props.gift.id}`, {
      method: 'DELETE',
    })
    
    if (res.status === 400 || res.status === 500) {
      const error = await res.json();
      alert(`Error occured: ${error.message}`)
    }
    
    props.onGiftsChange();
    console.log(res);
  }
  
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.gift.name}</td>
      <td>{props.gift.count} szt.</td>
      <td><a href="#" onClick={deleteGift}>🗑</a></td>
    </tr>
  )
}


