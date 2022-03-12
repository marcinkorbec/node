import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Participants} from './Participants';
import {data} from "./data/participants"

render(
	<React.StrictMode>
		<Participants list={data}/>
	</React.StrictMode>,
	document.getElementById('root')
);

