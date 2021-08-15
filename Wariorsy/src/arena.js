import { Warrior } from './warrior';

class Arena {
  #warrior1;

  #warrior2;

  constructor(warior1, warior2) {
    if (!(warrior1 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    if (!(warrior2 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    this.#warrior1 = warior1;
    this.#warrior2 = warior2;
  }
  fight() {
    this.#warrior2.setHitPoints(
      this.#warrior1.getAttack() - this.#warrior1.getAttack(),
    );
  }
}

module.exports = {
  Arena,
};
