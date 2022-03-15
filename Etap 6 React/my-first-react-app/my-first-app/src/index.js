import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {NumberList} from "./numberList";

render(
	<React.StrictMode>
		<NumberList/>
	</React.StrictMode>,
	document.getElementById('root')
);

