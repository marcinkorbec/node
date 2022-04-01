import React, {useEffect, useState} from "react";
import {GiftEntity} from "types";


interface Props {
  gift: GiftEntity;
  index: number;
  onGiftsChange: () => void;
}


export const GiftTableRow = (props: Props) => (
  <tr>
    <td>{props.index + 1}</td>
    <td>{props.gift.name}</td>
    <td>{props.gift.count} szt.</td>
    <td></td>
  </tr>
)


