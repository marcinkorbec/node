import React from "react";
import {Dialog} from "./Dialog";

export const ConfirmDialog = props => (
  <Dialog title={props.title}>
    {props.children}
    <hr/>
    <button>yes</button> <button>No</button>
  </Dialog>
)