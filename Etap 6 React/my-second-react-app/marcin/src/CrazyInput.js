import React, {useEffect, useState} from "react";

export const CrazyInput = props => {
    const [inputStyle, setInputStyle] = useState('white');

    useEffect(() => {
        const intervalId = setInterval(()=> {
            setInputStyle(inputStyle => (
                inputStyle === 'white' ? 'yellow' : 'white'
            ));
        }, 1000);

        return ()=> clearInterval(intervalId)
    }, [0])

    console.log(inputStyle)
    return <input type="password" style={{backgroundColor: inputStyle}}/>
}