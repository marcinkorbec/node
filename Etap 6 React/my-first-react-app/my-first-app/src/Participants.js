import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {

	const [thingToDo, setThingToDo] = useState('Iść do lodówki oraz');
	let secondInfo = 'Kreatywnośc nie zna granic. '

	setTimeout(() => {
		setThingToDo('zjeść kiełbase');
		secondInfo = 'xyz';
	}, 5000)

	return (
		<>
			<div>{secondInfo}</div>
			{thingToDo}
		</>
	);
}