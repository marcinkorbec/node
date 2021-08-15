class Arena {
  #warrior1;
  #warrior2;

  constructor(warior1, warior2) {
    this.#warrior1 = warior1;
    this.#warrior2 = warior2;
  }
}

module.exports = {
  Arena,
}