import React, {useState} from "react";
import "./Zad1.css";

export const PassText = props => {
    const [state, setState] = useState('password')

    const show = () => setState('text');
    const hide = () => setState('password')

    return (
        <>
            <input type={state}/>
            <button onMouseDown={show} onMouseUp={hide}>
                {state==='password' ? '👀' : '👁' }
            </button>
        </>
    )
}