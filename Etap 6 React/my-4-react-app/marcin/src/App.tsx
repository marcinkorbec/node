import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dialog} from "./components/common/Dialog/Dialog";
import {CryptoPrice} from "./components/CryptoPrice/CryptoPrice";

export const App = () => {
  return (
    <div className="App">
        <Dialog>
            <h1>Wstawić można tu coś!</h1>
        </Dialog>
        <CryptoPrice/>
    </div>
  );
}

