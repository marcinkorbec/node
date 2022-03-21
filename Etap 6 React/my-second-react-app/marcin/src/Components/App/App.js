import './App.css';
import {ThreeColorsLedBox} from "../ThreeColorsLed/Zad2";
import {PassText} from "../ShowHidePass/Zad1";
import {Aplication} from "../../dzien4";


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