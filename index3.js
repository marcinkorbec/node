class Country {
  constructor() {
    this.scoreTab = [];
  }
  addScore(result) {
    this.scoreTab.push(result);
  }
  checkWins() {
    let wins = 0;

    this.scoreTab.forEach(result => {
      if (result === 1) {
        wins++;
      }
    })

    if (wins > 0) {
      return `złotych medali: ${wins}. Gratulacje!`
    } else {
      return `Nic się nie stało!!! Polacy nic się nie stało!`
    }
  }

}

const poland = new Country();
const unitedKingdom = new Country();

poland.addScore(1);
poland.addScore(3);

console.log(poland.checkWins());

unitedKingdom.addScore(1);
unitedKingdom.addScore(1);
unitedKingdom.addScore(1);
unitedKingdom.addScore(2);
unitedKingdom.addScore(2);
unitedKingdom.addScore(2);
unitedKingdom.addScore(2);
unitedKingdom.addScore(2);
unitedKingdom.addScore(3);
unitedKingdom.addScore(3);
unitedKingdom.addScore(3);


console.log(unitedKingdom.checkWins());
