import React from "react";
import './App.css';


export const StringsList = (props) => {
	const names = props.list.join(', ');
	return <p>{names}</p>
}

