import React, {useState} from "react";
import './App.css';


export const StringsList = (props) => {
	const string = props.list
		.join(', ');
	console.log(string)

	return <h1>{string}</h1>
}

