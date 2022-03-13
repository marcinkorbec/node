import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {

	const [thingToDo, setThingToDo] = useState('Iść do lodówki oraz');

	setTimeout(() => {
		setThingToDo('zjeść kiełbase');
	}, 5000)

	return (
		<>
			{thingToDo === 'iść do lodówki' ? <strong>Brak jedzenia w lodówce:(</strong> : <h1>{thingToDo}</h1> }
		</>
	);
}