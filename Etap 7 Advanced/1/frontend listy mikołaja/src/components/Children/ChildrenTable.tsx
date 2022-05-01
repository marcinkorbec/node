import React, {useEffect} from "react";
import {GiftEntity, ChildEntity} from "types";
import {ChildrenTableRow} from './ChildrenTableRow';

interface Props {
  giftsList: GiftEntity[];
  childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => {
  console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th>Imie</th>
          <th>Prezent</th>
        </tr>
      </thead>
      <tbody>
      {
        props.childrenList.map(child => (
          <ChildrenTableRow
            key={child.id}
            child={child}
            giftsList={props.giftsList}
          />
        ))
      }
      </tbody>
    </table>
  )
}



