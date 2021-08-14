class Warrior {
  constructor(name, attack, hitPoints) {
    this.name = name;
    this.attack = attack;
    this.hitPoints = hitPoints;
  }
}

const marcin = new Warrior('Marcin', 5, 9);
const maria = new Warrior('Maria', 7,8);

console.log(marcin);
console.log(maria);
