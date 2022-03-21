import React, {useState} from "react";
import "./Kwadrat.css"

export const ThreeColorsLedBox = props => {
    const [color, setColor] = useState('white');

    const setRed = () => setColor('red');
    const setGreen = () => setColor('green');
    const setBlue = () => setColor('blue');
    const setWhite = () => setColor('white');


    return (
        <>
            <div className="ThreeColorsRed" style={{backgroundColor: color}}/>
            <div className="buttons">
                <button onClick={setGreen}>Zielony</button>
                <button onClick={setBlue}>Niebieski</button>
                <button onClick={setRed}>Czerwony</button>
                <button onClick={setWhite}>Reset</button>
            </div>
        </>
    )
}