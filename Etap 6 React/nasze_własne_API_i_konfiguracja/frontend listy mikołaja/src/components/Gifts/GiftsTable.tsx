import React, {useEffect} from "react";
import {GiftEntity} from "types";
import {GiftTableRow} from "./GiftTableRow";

interface Props {
  gifts: GiftEntity[];
  index: number;
  onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => (
  <table>
    <thead>
    <tr>
      <th>Lp.</th>
      <th>Nazwa</th>
      <th>Ilość</th>
      <th>Usuń</th>
    </tr>
    </thead>
    <tbody>
      {
        props.gifts.map((gift, index) => (
          <GiftTableRow gift={gift} index={index} key={gift.id} onGiftsChange={props.onGiftsChange}/>
        ))
      }
    </tbody>
  </table>
)
