class Warrior {
  constructor(name, hitPoints, life) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.life = life;
  }

  setLife(life) {
    this.life = life;
  }

  getLife() {
    return this.life;
  }

  getHitPoints() {
    return this.hitPoints;
  }

  getName() {
    return this.name;
  }

  levelUp() {
    this.hitPoints *= 1.1;
  }
}

class Arena {
  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) {
      throw new Error('warrior1 must be an instance of Warrior class!');
    }
    if (!(warrior2 instanceof Warrior)) {
      throw new Error('warrior2 must be an instance of Warrior class!');
    }
    this.warrior1 = warrior1;
    this.warrior2 = warrior2;
    this.activeWarrior = 1;
  }

  fight() {
    const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
    const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;
    const attackingHitPoints = attacker.getHitPoints();
    const attackedHitPoints = attacked.getLife();
    const attackedNewHitPoints = attackedHitPoints - attackingHitPoints;
    console.log(attacker.getName(), 'is attacking', attacked.getName(), 'and how he has', attackedNewHitPoints, 'hit points');
    attacked.set(attackedNewHitPoints);
    this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;
  }
}

const arena = new Arena()

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);
console.log(fighter1, fighter2);