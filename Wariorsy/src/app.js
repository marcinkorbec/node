class Warrior {
  #name;
  #attack;
  #hitPoints;

  constructor(name, attack, hitPoints) {
    this.#name = name;
    this.#attack = attack;
    this.#hitPoints = hitPoints;
  }

  getName() {
    return this.#name;
  }

  getAttack() {
    return this.#attack;
  }

  getHitPoints() {
    return this.#hitPoints;
  }

  setHitPoints(hitPoints) {
    this.#hitPoints = hitPoints;
  }

  levelUp() {
    this.#hitPoints *= 1.1;
    this.#attack *= 1.1;
  }
}

class Arena {
  #warrior1;
  #warrior2;

  constructor(warior1, warior2) {
    this.#warrior1 = warior1;
    this.#warrior2 = warior2;
  }
}

const arena = new Arena(
  new Warrior('Zawisza', 10, 100),
  new Warrior('Hatori Hanzor', 12, 87)
);

const marcin = new Warrior('Marcin', 5, 9);
const maria = new Warrior('Maria', 7,8);

console.log(marcin);
console.log(maria);

maria.setHitPoints(75);

console.log(maria);
console.log(maria.getName(), marcin.getName());