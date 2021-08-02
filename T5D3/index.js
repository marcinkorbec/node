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
    this.warrior1 = warrior1;
    this.warrior2 = warrior2;
  }
}

const arena = new Arena()

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);
console.log(fighter1, fighter2);