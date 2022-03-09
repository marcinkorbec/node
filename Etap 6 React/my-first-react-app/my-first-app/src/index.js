import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Participants from './StringsList';

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
		<div>
			<
				Participants
					list={data}
			/>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

