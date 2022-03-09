import React from "react";
import './App.css';


 export const StringsList = (props) => {
	const string = props.list.join(', ')
	return <p>Baza zawiera {props.list.length} rekordów.</p>
}

export default {
	StringsList,
}
