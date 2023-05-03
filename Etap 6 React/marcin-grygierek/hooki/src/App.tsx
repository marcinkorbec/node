import React from 'react';
import './App.css';
import {useEffect} from "react";
import {Calculator} from "./redux-toolkit/Calculator";

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
