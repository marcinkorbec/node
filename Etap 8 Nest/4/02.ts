enum Gender {
  Female = 'female',
  Male = 'male',
}

interface Kitty {
  name: string;
  gender: Gender;
  age: 'Unknown' | number;
  isAdopted: boolean;
  specialNeeds?: string[];
}

const kitties: Kitty[] = [
  {
    name: 'Mruczek',
    gender: Gender.Male,
    age: 3,
    isAdopted: true,
    specialNeeds: ['Drinks only water'],
  },
  {
    name: 'Simon',
    gender: Gender.Male,
    age: 3,
    isAdopted: true,
  },
  {
    name: 'łatka',
    gender: Gender.Female,
    age: 'Unknown',
    isAdopted: true,
  },

];