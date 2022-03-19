import React from "react";
import "./Kwadrat.css"

export const PasswordInput = props => {
    // const [state, useState] = useState('white');

    return (
        <>
            <div className="Kwadrat"></div>
            <div className="buttons">
                <button>Zielony</button>
                <button>Niebieski</button>
                <button>Czerwony</button>
                <button>Reset</button>
            </div>
        </>
    )
}