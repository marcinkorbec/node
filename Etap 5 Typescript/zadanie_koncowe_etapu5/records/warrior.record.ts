import {ValidationError} from "../utils/errors";

export class WarriorRecord {
    public id?: string;
    public readonly name: string;
    public readonly strong: number;
    public readonly defense: number;
    public readonly resilience: number;
    public readonly agility: number;
    public readonly wins?: number;

    constructor(obj: WarriorRecord) {
        const {id, name, strong, defense, resilience, wins, agility} = obj;

        const sum = [strong, defense, resilience, agility].reduce((previousValue, currentValue) =>
            previousValue + currentValue, 0);

        if (sum !== 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosić 10. Aktualnie jest to ${sum}.`);
        };

        if (name.length < 3 && name.length > 40) {
            throw new ValidationError(`Nick powinien być dłuższy niż 3 znakii krótszy niż 40. Aktualnie jest to ${name.length}`);
        };

        this.id = id;
        this.name = name;
        this. strong = strong;
        this.defense = defense;
        this.resilience = resilience;
        this.agility = agility;
        this.wins = wins;
    }

    async insert() {

    }

    async update() {

    }

    static async getOne(id: string) {

    }

    static async listAll() {

    }

    static async topList(topCount: number) {

    }
}

