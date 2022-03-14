import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Counter} from './Counter';

render(
	<React.StrictMode>
		<Counter/>
	</React.StrictMode>,
	document.getElementById('root')
);

