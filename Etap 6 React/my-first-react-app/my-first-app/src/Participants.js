import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {

	const [count, setCount] = useState(0);

	return (
		<>
			{count}
		</>
	);
}