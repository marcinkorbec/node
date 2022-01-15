interface Human {
    name: string;
    surname: string;
    age: number;
    achievements?: string;
}


class Person implements Human {
    name: string;
    age: number;
    surname: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const kuba = new Person('Kuba', 27);
console.log(kuba);
