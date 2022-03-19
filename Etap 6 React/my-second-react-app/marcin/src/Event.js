import React from "react";
import './App.css';


export const Event = props => {

    const clicked = event => {
        alert('Kliknięto!');
    };

    return <button onClick={clicked}>Click me!</button>
}