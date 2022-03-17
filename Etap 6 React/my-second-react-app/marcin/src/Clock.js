import {useEffect, useState} from "react";

export const Clock = props => {
    const [dt, setDt] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDt(new Date());
        }, 1000)

        return () => clearInterval();
    }, [])

    useEffect(() => {
        console.log('Czas się zmienił');
    }, [dt]);

    useEffect(() => {
        return () => {
            console.log('Komponent będzie zdemontowany.')
        };
    }, []);


    return <p>{dt.toLocaleString()}</p>
}