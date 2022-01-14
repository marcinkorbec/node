interface Human {
    name: string;
    age: number;
    achievements?: string;
}


class Person implements Human {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}