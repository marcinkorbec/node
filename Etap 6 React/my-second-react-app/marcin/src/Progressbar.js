import React, {useEffect, useState} from "react";

import './Progressbar.css'

export const Progressbar = props => {
    const [progressbar, setProgressbar] = useState(0);

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setProgressbar( progressbar => {
                if (progressbar >= 99) {
                    clearInterval(intervalId)
                    return progressbar;
                }
                return progressbar + 0.05;
                }
        )}, 1);

        return ()=> clearInterval(intervalId);
    },[])

    return (
        <div
        className="Progressbar"
        style={{
            width: `${progressbar}vw`
        }}
    >{Math.ceil(progressbar)}%</div>
    )
}

// progressbar>=100? progressbar = 100 : Math.ceil(progressbar)