const { rand } = require('./utils');
const { Warrior } = require('./warrior');
const { Arena } = require('./arena');

const arena = new Arena(
  new Warrior('Zawisza', rand(5, 10), rand(90, 140)),
  new Warrior('Hatori Hanzor', rand(4, 10), rand(90, 140)),
);

let winner;

do{
  winner = arena.fight();
} while (winner === null);
