import React from "react";
import '../App/App.css';


export const StringsList = (props) => {
    const liList = props
        .list
        .map((s, index) => <li key={index.toString()}>{s}</li>);

    return <h1>{liList}</h1>
}

