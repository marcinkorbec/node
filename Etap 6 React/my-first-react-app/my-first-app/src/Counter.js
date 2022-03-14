import React, {Component} from "react";
import './App.css';



export class Counter extends Component {
	state = {
		name: 'Foo',
		lastName: 'Xxxx',
		count: 0
	};

	componentDidMount() {
		setInterval( () => {
			this.setState(prev => ({
				count: prev.count + 1,
			}))
		}, 1000)
		console.log('Pierwsze zamontowanie naszego komponentu.');
	}

	componentDidUpdate() {

		console.log('Aktualizowanie DOMu.')
	}

	componentWillUnmount() {
		console.log('Komponent zostanie odmonotowany.')
	}

	render () {
		const {count} = this.state
		return <h1>{count}</h1>
	}
}