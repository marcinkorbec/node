const { Warrior } = require('./warrior');

class Arena {
  #warrior1;

  #warrior2;

  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    if (!(warrior2 instanceof Warrior)) { throw new Error('warrior shuld be instance of Warrior class!'); }
    this.#warrior1 = warrior1;
    this.#warrior2 = warrior2;
  }
  fight() {
    this.#warrior2.setHitPoints(
      this.#warrior2.getHitPoints() - this.#warrior1.getAttack(),
    );
    console.log(this.#warrior2.getHitPoints())
  }
}

module.exports = {
  Arena,
};
