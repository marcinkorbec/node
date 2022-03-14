import React, {useState} from "react";
import './App.css';
import {Counter} from "./Counter";

export const App = props => {
	const [show, setShow] = useState(true);

	setTimeout(()=> {
		setShow(false);
	}, 5000)

	return show===true ? <Counter/> : null;
}