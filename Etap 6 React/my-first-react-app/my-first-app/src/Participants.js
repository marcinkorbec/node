import React, {Component} from "react";
import './App.css';



export class Participants extends Component {
	state = {
		name: 'Foo',
		lastName: 'Xxxx'
	};

	componentDidMount() {
		setTimeout( () => {
			this.setState({
				name: 'Bar'
			})
		}, 2500)

		console.log('Pierwsze zamontowanie naszego komponentu.');
	}

	componentDidUpdate() {
		console.log('Aktualizowanie DOMu.')
	}

	componentWillUnmount() {
		console.log('Komponent zostanie odmonotowany.')
	}

	render () {
		const name = this.state;
		return <h1>{this.state.name}</h1>
	}
}