import React from "react";
import './App.css';
import {StringsList} from "./StringsList";
import {RecordsCount} from "./RecordsCount";



export const Participants = (props) => {
	const names = props.list.map(person => person.name);

	return (
		<>
			<StringsList list={names}/>
			<hr/>
			<RecordsCount count={names.length}/>
		</>
	);
}