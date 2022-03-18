import React, {useEffect, useState} from "react";

export const CrazyInput = props => {
    const [inputType, setInputType] = useState('pasword');

    useEffect(() => {
        const intervalId = setInterval(()=> {
            setInputType(inputType => (
                inputType === 'password' ? 'text' : 'password'
            ));
        });

        return ()=> clearInterval(intervalId)
    }, [0])

    return <input type={inputType}/>
}