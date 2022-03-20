import React from "react";
import {StringsList} from "./StringsList";

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