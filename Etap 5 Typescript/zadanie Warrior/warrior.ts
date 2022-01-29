export class Warrior {
    constructor(
        public name: string,
        public hitPoints: number,
        public hp:number
    ) {};

    set Hp(hp: number) {
        this.hp = hp;
    }

    get Hp(): number {
        return this.hp;
    }

    get HitPoints(): number {
        return this.hitPoints;
    }

    get Name(): string {
        return this.name;
    }

    levelUp(): void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}