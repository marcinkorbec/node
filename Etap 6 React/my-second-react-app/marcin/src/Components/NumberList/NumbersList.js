import React, {Component, useEffect, useState} from "react";
import '../App/App.css';
import {StringsList} from "../StringsList/StringsList";


export const NumberList = props => {
    const [numbers, setNumbers] = useState([1])

    useEffect(() => {
        const intervalId = setInterval( () => {
            setNumbers(numbers => (
                [...numbers, numbers.length + 1]
            ));
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return <StringsList list={numbers}/>
}