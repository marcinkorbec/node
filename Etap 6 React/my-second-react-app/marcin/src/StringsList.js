import React, {useEffect, useState} from "react";
import './App.css';


export const StringsList = (props) => {
    const string = props.list
        .join(', ');
    console.log(string)

    useEffect(() => {
        console.log('Zmienia się lista.');
    }, [props.list])

    return <h1>{string}</h1>
}

