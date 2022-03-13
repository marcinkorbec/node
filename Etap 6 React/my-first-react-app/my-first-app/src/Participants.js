import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {
	const [count, setCount] = useState(0);
	const [person, setPerson] = useState({
		name: 'Marcin',
		email: 'marcin@gmail.com'
	});

	setTimeout(() => {
		setPerson(() => {
			const personCopy = JSON.parse(JSON.stringify(person));
			personCopy.name = 'Kuba';
			return personCopy;
		})
	}, 2500);


	return (
		<>
			<h1>{count}</h1>
			<p>{person.name}</p>
		</>
	)
}