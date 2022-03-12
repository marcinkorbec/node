import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {

	const [thingToDo, setThingToDo] = useState('iść do lodówki');

	return (
		<>
			{thingToDo}
		</>
	);
}