import React from "react";
import './App.css';
import StringsList from "./StringsList";



const Participants = (props) => {
	const names = props.list.map(person => person.name)

	return <>
			<StringsList list={names}/>
			<hr/>
			<p>Baza zawiera {props.list.length} rekordów.</p>
		</>
}

export default {
	Participants,
}
