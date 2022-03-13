import React, {useState} from "react";
import './App.css';



export const Participants = (props) => {

	const [count, setCount] = useState(0);

	setInterval(() => {
		setCount (count => {
			return count + 1;
		})
	}, 1000)

	return <h1>{count}</h1>
}