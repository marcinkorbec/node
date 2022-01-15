// interface Human {
//     name: string;
//     surname: string;
//     age: number;
//     achievements?: string;
// }

// interface HistoryClass {
//     history: string[]; //tablica stringów
//     showHistory(): void;
// }

// class Person implements Human, HistoryClass {
//     name: string;
//     age: number;
//     surname: string = '';
//     history: string[] = [];

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     showHistory(): void {
//         console.log(this.history);
//     }
// }

// const kuba = new Person('Kuba', 27);
// console.log(kuba);


interface Human {
    name: string;
    surname: string;
    age: number;
    achievements?: string;
}

interface HumanWithRole extends Human {
    role: string;
}

class User implements HumanWithRole {
    role: string;
    name: string;
    surname: string;
    age: number;
    achievements?: string;

}