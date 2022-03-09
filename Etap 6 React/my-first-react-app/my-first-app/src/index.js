import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Participants from './Participants';

const data = [
	{
		name: 'Anna',
		mail: 'a@wp.pl'
	},
	{
		name: 'Maria',
		mail: 'm@wp.pl'
	},
	{
		name: 'Ela',
		mail: 'e@wp.pl'
	},
	{
		name: 'Józia',
		mail: 'j@wp.pl'
	}
];

render(
	<React.StrictMode>
		<Participants list={data}/>
	</React.StrictMode>,
	document.getElementById('root')
);

