{
  function Car(name) {
    //console.log(this);
    this.name = name;
  }

  const maluch = new Car();
  const polonez = new Car();

  //1. nowy pusty obiekt
  //2. wiązanie this z utworzonym obiektem
  //3. powstaje właściwość __proto__
  //4. Wywołanie funkcji i przypisanie do zmiennej

  maluch.name = 'zabytek';

  console.log(maluch);
  console.log(polonez);
}