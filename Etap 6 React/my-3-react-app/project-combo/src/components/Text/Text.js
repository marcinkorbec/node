import React from "react";
import {Dialog} from "../common/Dialog/Dialog";
import {ConfirmDialog} from "../common/Dialog/ConfirmDialog";

export const TextApp = props => {
  return (
    <>
      <Dialog title="Witam">Witam serdetsznie na stronie głównej sialalala:)</Dialog>
      <Dialog title="Jest pięknie a będzie jeszcze piękniej">
        <h1>Tytuł</h1>
        <p>sialala, jest legancko</p>
      </Dialog>
      <ConfirmDialog title="Czy aby napewno?">
        <p>Kilnij aby zatwierdzić:</p>
      </ConfirmDialog>
    </>
  )
}