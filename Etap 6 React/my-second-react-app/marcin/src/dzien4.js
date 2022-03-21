import React from "react";
import {StringsList} from "./Components/StringsList/StringsList";

export const Aplication = props => {

    const array = [
        'Marcin',
        'Juzek',
        'Zbyniu',
        'Stasiu',
    ]

    return (
        <StringsList list={array}/>
    )
}