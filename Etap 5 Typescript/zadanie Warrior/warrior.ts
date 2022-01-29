// interface Warriors {
//     name: string,
//     hitPoints: number,
//     hp: number,
// }

export class Warrior {
    name: string
    hitPoints: number
    hp: number

    public constructor(name: string, hitPoints: number, hp:number) {
        // this.name = name;
        // this.hitPoints = hitPoints;
        // this.hp = hp;
    }

    setHp(hp: number): void {
        this.hp = hp;
    }

    getHp(): number {
        return this.hp;
    }

    getHitPoints(): number {
        return this.hitPoints;
    }

    getName(): string {
        return this.name;
    }

    levelUp(): void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}