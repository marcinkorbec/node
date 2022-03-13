import React, {Component} from "react";
import './App.css';



export class Participants extends Component {
	state = {
		name: 'Foo',
		lastName: 'Xxxx'
	};

	render () {

		setTimeout( () => {
			this.setState({
				name: 'Bar'
			})
		}, 2500)

		return <h1>{this.state.name}</h1>
	}
}