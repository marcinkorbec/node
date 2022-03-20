import React, {useEffect, useState} from "react";
import './App.css';


export const StringsList = (props) => {
    const liList = props
        .list
        .map((s, index) => <li key={index.toString()}>{s}</li>);

    return <h1>{liList}</h1>
}

