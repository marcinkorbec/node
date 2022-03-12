import React from "react";
import './App.css';


export const StringsList = (props) => {
	const string = props.list
		.slice(0, props.list.length - 1)
		.join(', ');

	return <p>{string}</p>
}

