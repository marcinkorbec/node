import React, {Component, useState} from "react";
import './App.css';



export class Participants extends Component {
	state = {
		name: 'Foo',
		gentleList: ['Marcin', 'Bartek', 'Juzek', 'Zenobiusz']
	};

	render () {
		const [name, setName] = useState('Foo')

		setTimeout( () => {
			this.setState({
				name: 'Bar'
			})
		}, 2500)
		return <h1>{this.setState.name}</h1>
	}
}