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

// function date(person: Person) {
//     let today = new Date();
//     let yr = today.getFullYear();
//     console.log(`Date of birth ${this.name} is ${yr}`);
// }

// function greet(person: Person) {
//     console.log(`Hello, ${person.name}`);
// }


interface Person {
    name: string;
    yearOfBirth: number;
    isDeveloper: boolean;
    greet(): string;
    age(): number;
}



const personA: Person = {
    name: 'Bartek',
    yearOfBirth: 1970,
    isDeveloper: true,
    greet() {
        return this.name
    },
    age() {
        const today: number = new Date().getFullYear();
        const age: number = today - this.yearOfBirth;
        return age;
    }
};

console.log(`Hello ${personA.greet()}, ${personA.name} is ${personA.age()} years old`);



// const personB: Person = {
//     name: 'Kuba',
//     age: 122,
//     isDeveloper: true,
//     greet: function (): void {
//         console.log(`Hello ${this.name}`);
//     },
//     dateOfBirth() {
//         let today: Date = new Date();
//         let yr: number = today.getFullYear();
//         console.log(`Date of birth ${this.name} is ${yr}`);
//     }
// }

// // greet(personB);

// greet({
//     name: 'Testerka',
//     age: 34,
//     isDeveloper: true,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
//     dateOfBirth() {
//         let today: Date = new Date();
//         let yr: number = today.getFullYear();
//         console.log(`Date of birth ${this.name} is ${yr}`);
//     }
// });

// const personC: Person = {
//     name: 'Marta',
//     age: 23,
//     isDeveloper: true,
//     greet() {
//         console.log(`Hello ${this.name}`);
//     },
//     dateOfBirth() {
//         let today: Date = new Date();
//         let yr: number = today.getFullYear();
//         console.log(`Date of birth ${this.name} is ${yr}`);
//     }
// }

