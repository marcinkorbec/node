import {Warrior} from "./warrior";
import {Arena} from "./arena";

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner;
do {
    winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.Name, 'is a winner!');