// function sum(a: number, b: number) {
//     return a + b;
// }

// const input = document.querySelector('input');
// if (input) {
//     const val = parseInt(input.value);

//     console.log(sum(2, 3));
//     console.log(sum(2, val));


// }

// const add = (a: any, b: any): number | string => {
//     return a + b;
// }
// console.log(add(2, 3));
// console.log(add('Hello', ' World!'));


interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    greet(): void;
    dateOfBirth(): void;
    myDate: Date = new Date();
}


const personA: Person = {
    name: 'Bartek',
    age: 123,
    isDeveloper: true,
    greet() {
        console.log(`Hello ${this.name}`);
    },
    dateOfBirth() {
        date: new Date()
        console.log(`Date of birth ${this.name} is ${this.Date}` );        
    }
};

const personB: Person = {
    name: 'Kuba',
    age: 122,
    isDeveloper: true,
    greet: function (): void {
        console.log(`Hello ${this.name}`);
    }
}



greet({
    name: 'Testerka',
    age: 34,
    isDeveloper: true,
    greet() {
        console.log((`Hello ${this.name}`);
    }
});

const personC: Person = {
    name: 'Marta',
    age: 23,
    isDeveloper: true,
    greet() {
        console.log((`Hello ${this.name}`);
    }
}

// console.log(personA.isDeveloper === personB.isDeveloper);
