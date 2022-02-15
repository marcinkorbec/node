import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";

type WarriorRecordResult = [WarriorRecord[], FieldPacket[]];

export class WarriorRecord {
    public id?: string;
    public readonly name: string;
    public readonly strong: number;
    public readonly defense: number;
    public readonly resilience: number;
    public readonly agility: number;
    public readonly wins?: number;

    constructor(obj: Omit<WarriorRecord, 'insert' | 'update'>) {
        const {id, name, strong, defense, resilience, wins, agility} = obj;
        const stats = [strong, defense, resilience, agility];

        const sum = stats.reduce((previousValue, currentValue) =>
            previousValue + currentValue, 0);

        console.log(sum);

        for (const stat of stats) {
            if (stat < 1) {
                throw new ValidationError(`Każda ze statystyk musi wynosić minimum 1, Ta zasada została złamana.`)
            }
        }

        if (sum !== 10) {
            throw new ValidationError(`Suma wszystkich statystyk musi wynosić 10. Aktualnie jest to ${sum}.`);
        }

        if (name.length < 3 && name.length > 40) {
            throw new ValidationError(`Nick powinien być dłuższy niż 3 znaki i krótszy niż 40. Aktualnie jest to ${name.length}`);
        }

        this.id = id ?? uuid();
        this.name = name;
        this.strong = strong;
        this.defense = defense;
        this.resilience = resilience;
        this.agility = agility;
        this.wins = wins ?? 0;
    }

    async insert(): Promise<string> {

        await pool.execute("INSERT INTO `warriors`(`id`, `name`, `strong`, `defense`, `resilience`, `agility`, `wins`) VALUES(:id, :name, :strong, :defense, :resilience, :agility, :wins)", {
            id: this.id,
            name: this.name,
            strong: this.strong,
            defense: this.defense,
            resilience: this.resilience,
            agility: this.agility,
            wins: this.wins,
        });
        return this.id;
    }

    async update(): Promise<void> {
        await pool.execute("UPDATE `warriors` SET `wins` = :wins", {
            wins: this.wins,
        });
    }

    static async getOne(id: string): Promise<WarriorRecord | null> { // metoda statyczna nie ma dostępu do this !!!
        const [results] = await pool.execute("SELECT * FROM `warriors` WHERE `id` = :id", {
            id: id,
        }) as WarriorRecordResult;
        return results.length === 0 ? null : new WarriorRecord(results[0]);
    }

    static async listAll(): Promise<WarriorRecord[]> { // metoda statyczna nie ma dostępu do this !!!
        const [results] = await pool.execute("SELECT * FROM `warriors`") as WarriorRecordResult;
        return results.map(obj => new WarriorRecord(obj));
    }

    static async topList(topCount: number): Promise<WarriorRecord[]> { // metoda statyczna nie ma dostępu do this !!!
        const [results] = await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT :topCount", {
            topCount,
        }) as WarriorRecordResult;
        return results.map(obj => new WarriorRecord(obj));
    }

    static async isNameTaken(name: string): Promise<boolean> {
        const [results] = await pool.execute("SELECT * FROM `warriors` WHERE `name` =:name", {
            name,
        }) as WarriorRecordResult;
        return results.length > 0 ;
    }
}

