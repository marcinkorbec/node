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
		const {numbers} = this.state
		return <StringsList list={numbers}/>
	}
}