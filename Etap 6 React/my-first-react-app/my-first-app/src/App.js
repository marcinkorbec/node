import './App.css';

function App(props) {

	console.log(props);
	console.log(typeof props.isTest)

	return (
    	<>
			<h1>Hello {props.name}</h1>
			<hr/>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque delectus deserunt dolorem doloremque facilis id incidunt labore maiores minima nam, natus odit quidem, quo quod tenetur veniam vero voluptates.</p>
		</>
  	);
}

export default App
