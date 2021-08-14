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

{
  //PROTOTYP

  const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function(name) {
    //   this.children.push(name);
    // }
  }
  Person.prototype.addChildren = function(name) {
      this.children.push(name);
  }

  const arek = new Person('arek', 20);
  const marta = new Person('marta', 23);

  arek.addChildren('Bartuś')

  console.log(arek);
  console.log(marta);

}