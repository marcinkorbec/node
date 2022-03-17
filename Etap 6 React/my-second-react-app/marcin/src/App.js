import './App.css';
import {Clock} from "./Clock";
import {useState} from "react";

export const App = props => {
    const [show, setShow] = useState(true);

    setTimeout(()=> {
        setShow(false);
    }, 5000);

    return show ? <Clock/> : null;
}


