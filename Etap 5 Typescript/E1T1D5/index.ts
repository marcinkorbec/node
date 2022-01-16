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


// interface Human {
//     name: string;
//     surname: string;
//     age: number;
//     achievements?: string;
// }

// interface HumanWithRole extends Human {
//     role: string;
// }

// class User implements HumanWithRole {
//     role: string;
//     name: string;
//     surname: string;
//     age: number;

//     constructor(age: number, name: string, role: string) {
//         this.name = name;
//         this.age = age;
//         this.role = role;
//     }
// }


interface Human {
    name: string;
    surname: string;
    age: number;
}

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface Historic {
    history: HistoryEntry[];
}

class User implements Human, Historic {
    length: number;
    history: HistoryEntry[]; // Coś trzeba będzie z zrobić z tym
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number, ) {
        this.name = name;
        this.age = age;
        this.surname = surname;
        
    }

    showHistory(): void {

    }

    // addHistory(entry): void {

    // }
}

const person = new User ('Marcin', 'Kowalski', 34 );
person.showHistory();
person.addHistory