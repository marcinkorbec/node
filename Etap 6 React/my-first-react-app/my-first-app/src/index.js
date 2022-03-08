import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

render(
	<>
		<App name="Testowa" lastName="Osoba"/>
		<App name="Marcin"/>
		<App name="Marysia"/>
	</>,
	document.getElementById('root')
);

