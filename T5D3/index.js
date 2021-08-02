class Warrior {
  constructor(name, hitPoints, life) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.life = life;
  }

  getName() {
    return this.name;
  }
  
}


const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);
console.log(fighter1, fighter2);