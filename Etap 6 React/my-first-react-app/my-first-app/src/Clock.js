import {useEffect, useState} from "react";

export const Clock = props => {
	const [dt, setDt] = useState(new Date());

	useEffect(() => {

		setInterval(()=> {
			setDt(new Date());
		})

	}, [])

	return <p>{dt.toLocaleString()}</p>
}





// export class Clock extends Component {
// 	state = {
// 		dt: new Date(),
// 	}
//
// 	componentDidMount() {
// 		this.intervalId = setInterval( () => {
// 			this.setState({
// 				dt: new Date(),
// 			})
// 		}, 1000)
//
// 		console.log('Pierwsze zamontowanie naszego komponentu.');
// 	}
//
// 	componentWillUnmount() {
// 		console.log('Komponent zostanie odmonotowany.')
// 		clearInterval(this.intervalId);
// 	}
//
// 	render() {
// 		return <p>{this.state.dt.toLocaleString()}</p>
// 	}
// }