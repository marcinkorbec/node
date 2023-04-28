import React, {useCallback} from 'react';
import './App.css';
import {useEffect, useState} from "react";
import { AppRerender } from './AppRerender';
import {AppRef} from "./AppRef";
import {AppReducer} from "./AppReducer";
import {AppReducer2} from "./AppReducer2";
import {Calculator} from "./context/Calculator";

interface Props {
  handler: ()=> void;
}

const Foo = ({handler}: Props) => {
  useEffect(()=> {
    handler();
  }, [handler]);
  return <h1>Hello World!</h1>
}

function App() {
  return <Calculator/>
}

export default App;
