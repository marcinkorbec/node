const { Warrior } = require('./warrior');
const { Arena } = require('./arena');



const arena = new Arena(
  new Warrior('Zawisza', 10, 100),
  new Warrior('Hatori Hanzor', 12, 87)
);

console.log(arena.fight());
console.log(arena.fight());
console.log(arena.fight());
console.log(arena.fight());