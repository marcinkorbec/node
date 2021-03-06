import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {Gender} from "./components/Gender/Gender";
import {Agreement} from "./components/Agreement/Agreement";
import {InteractiveTask} from "./components/InetractiveTask/InteractiveTask";
import {Form2} from "./components/Form2/Form2";
import {App2} from "./components/Dziedziczenie/Dziedziczenie";
import {Dialog} from "./components/common/Dialog/Dialog";
import {TextApp} from "./components/Text/Text";

ReactDOM.render(
  <React.StrictMode>
    <TextApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
