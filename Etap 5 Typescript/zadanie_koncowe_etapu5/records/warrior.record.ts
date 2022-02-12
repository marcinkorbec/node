import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";

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
            throw new ValidationError(`Nick powinien być dłuższy niż 3 znaki i krótszy niż 40. Aktualnie jest to ${name.length}`);
        };

        this.id = id;
        this.name = name;
        this.strong = strong;
        this.defense = defense;
        this.resilience = resilience;
        this.agility = agility;
        this.wins = wins;
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `warriors`(`id`, `name`, `strong`, `defense`, `resilience`, `agility`, `wins`) VALUES(:id, :name, :strong, :defense, :resilience, :agility, :wins)",{
            id: this.id,
            name: this.name,
            strong: this.strong,
            defense: this.defense,
            resilience: this.resilience,
            agility: this.agility,
            wins: this.wins,
        });
    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `warriors` SET `name` = :name, `giftId` = :giftId WHERE `id` = :id", {
            id: this.id,
            name: this.name,
        });
    }

    static async getOne(id: string) {

    }

    static async listAll() {

    }

    static async topList(topCount: number) {

    }
}

