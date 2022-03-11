import React from "react";
import './App.css';


export const RecordsCount = (props) => {
	console.log(props)
	return <p>Razem: {props.list.length} rekordów.</p>
}