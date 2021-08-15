const { Warrior } = require('./warrior');

class Arena {
  #warrior1;

  #warrior2;

  #attackingWarrior = 1;

  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    if (!(warrior2 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    this.#warrior1 = warrior1;
    this.#warrior2 = warrior2;
  }

  fight() {
    const attacker = this.#attackingWarrior === 1 ? this.#warrior1 : this.#warrior2;
    const defender = this.#attackingWarrior === 1 ? this.#warrior2 : this.#warrior1;
    this.#attackingWarrior = this.#attackingWarrior === 1 ? 2 : 1;

    defender.setHitPoints(
      this.#warrior2.getHitPoints() - this.#warrior1.getAttack(),
    );

    if (defender.getHitPoints() <= 0) {
      console.log(defender.getName(), 'zdechł marnie');
      return attacker;
    }
  }
}

module.exports = {
  Arena,
};
