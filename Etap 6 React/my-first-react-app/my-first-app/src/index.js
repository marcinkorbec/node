import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

render(
	<React.StrictMode>
		<div>
			<
				App name="Marcin"
				lastName="Korbecki"
				age = {20}
				isTest
			/>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

