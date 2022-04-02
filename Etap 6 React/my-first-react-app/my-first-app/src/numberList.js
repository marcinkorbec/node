import React, {Component} from "react";
import './App.css';
import {StringsList} from "./StringsList";

export class NumberList extends Component {
	state = {
		numbers: [1],
	};

	componentDidMount() {
		this.intervalId = setInterval( () => {
			this.setState(prev => ({
				numbers: [...prev.numbers, prev.numbers.length + 1]
			}));
		}, 1000)

		console.log('Pierwsze zamontowanie naszego komponentu.');
	}

	componentWillUnmount() {
		console.log('Komponent zostanie odmonotowany.')
		clearInterval(this.intervalId);
	}

	render () {
		return <StringsList list={this.state.numbers}/>
	}
}

