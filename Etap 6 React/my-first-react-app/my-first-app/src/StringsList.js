import React from "react";
import './App.css';



const StringsList = (props) => {
	const string = props.list
		.map(person => person.name)
		.join(', ')
	return (
    	<>
			<p>Hello {Names}</p>
			<hr/>
			<p>Baza zawiera {props.list.length} rekordów.</p>
		</>
  	);
}

export default {
	Participants: StringsList,
	Names
}
