import React, {useCallback} from 'react';
import './App.css';
import {useEffect, useState} from "react";
import { AppRerender } from './AppRerender';
import {AppRef} from "./AppRef";
import {AppReducer} from "./AppReducer";
import {AppReducer2} from "./AppReducer2";
import {Calculator} from "./Calculator";

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
  // const [counter, setCounter] = useState<number>(0);
  // const [randomValue, setRandomValue] = useState<number>(0)
  //
  // useEffect(()=> {
  //   const interval = setInterval(()=> {
  //     setCounter(prevCounter => prevCounter + 1);
  //   }, 1000)
  //
  //   const interval2 = setInterval(()=> {
  //     setRandomValue(Math.random());
  //   }, 500)
  //
  //   return()=> {
  //     clearInterval(interval)
  //   }
  // }, []);
  //
  // const handler = useCallback(()=> {
  //   console.log(counter)
  // }, [])

  return <Calculator/>
}

export default App;
