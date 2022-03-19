import React from "react";
import './App.css';


export class Event extends React.Component {

    clicked(event) {
        event.preventDefault();
        console.log(event);
    };

    render() {
        return <button onClick={this.clicked}>Click me!</button>
    }
}