const { rand } = require('./utils');
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

    console.log(attacker.getName(),  'is attacking', defender.getName(), 'and now he has', defender.getHitPoints(), 'Hit points.')
    if (defender.getHitPoints() <= 0) {
      console.log(defender.getName(), 'zdechł marnie.');
      console.log(attacker.getName(), 'Jest zwycięzcą!')
      return attacker;
    }
    return null;
  }
}

module.exports = {
  Arena,
};
