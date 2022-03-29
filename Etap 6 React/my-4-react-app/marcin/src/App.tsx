import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CryptoPrice} from "./components/CryptoPrice/CryptoPrice";

export const App = () => {
  return (
    <div className="App">
        <CryptoPrice/>
    </div>
  );
}

