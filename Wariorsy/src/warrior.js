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

module.exports = {
  Warrior,
};
