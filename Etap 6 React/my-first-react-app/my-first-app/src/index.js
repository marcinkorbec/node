import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Counter} from './Counter';
import {data} from "./data/participants"

render(
	<React.StrictMode>
		<Counter list={data}/>
	</React.StrictMode>,
	document.getElementById('root')
);

