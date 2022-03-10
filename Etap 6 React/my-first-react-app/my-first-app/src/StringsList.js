import React from "react";
import './App.css';


export const StringsList = (props) => {
	console.log(props.list)
	const names = props.list.join(', ');
	return <p>{names}</p>
}

