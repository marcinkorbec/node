import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const name = prompt("jak masz na imię?")

const MyComponent = () => {
	return (
		<div>
			{ (name==='') ? <strong>Nie podałeś imienia!</strong> : <h1>Witaj {name}</h1>}
		</div>
	)
}



ReactDOM.render(
	<MyComponent/>,
	document.getElementById('root')
);




