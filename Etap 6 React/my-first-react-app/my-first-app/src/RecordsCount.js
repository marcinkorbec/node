import React from "react";
import './App.css';


export const RecordsCount = (props) => {
	return <p>Razem: {props.list.length} rekordów.</p>
}