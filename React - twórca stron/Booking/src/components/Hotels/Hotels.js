import React, {Component} from "react";
import {Hotel} from "./Hotel/Hotel";

export class Hotels extends Component {
  render() {
    return (
      <div>
        <p>Hotels.</p>
        <Hotel/>
      </div>
    )
  }
}