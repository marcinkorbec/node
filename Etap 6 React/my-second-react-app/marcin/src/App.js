import './App.css';
import {ThreeColorsLedBox} from "./Zad2";
import {PassText} from "./Zad1";
import {Aplication} from "./dzien4";


export const App = props => {
    console.log(props)

    return (
        <>
            <ThreeColorsLedBox/>
            <PassText/>
            <Aplication/>
        </>
    )
}