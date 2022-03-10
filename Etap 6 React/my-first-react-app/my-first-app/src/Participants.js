import React from "react";
import './App.css';
import {StringsList} from "./StringsList";



export const Participants = (props) => {
	const names = props.list.map(person => person.name)
	console.log(names);

	return (
		<>
			<StringsList list={names}/>
			<hr/>
			<p>Baza zawiera {props.list.length} rekordów.</p>
		</>
	);
}