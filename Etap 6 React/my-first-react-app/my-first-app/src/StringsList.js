import React, {useState} from "react";
import './App.css';


export const StringsList = (props) => {

	const [dontGiveUp, setDontGiveUp] = useState(true);

	const string = props.list
		.slice(0, props.list.length - 1)
		.join(', ');

	return <p>{string}</p>
}

