import React, {Component} from "react";
import './App.css';



export class NumberList extends Component {
	state = {
		count: 0
	};

	componentDidMount() {
		this.intervalId = setInterval( () => {
			this.setState(prev => ({
				count: prev.count + 1,
			}))
		}, 1000)
		console.log('Pierwsze zamontowanie naszego komponentu.');
	}

	// componentDidUpdate() {
	//
	// 	console.log('Aktualizowanie DOMu.')
	// }
	//
	componentWillUnmount() {
		console.log('Komponent zostanie odmonotowany.')
		clearInterval(this.intervalId);
	}

	render () {
		const {count} = this.state
		return <h1>{count}</h1>
	}
}