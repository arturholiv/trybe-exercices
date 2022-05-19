import { randomUUID } from 'crypto';

export default class Hero {
    public readonly id: string;
    private _name: string;
    private _age: number;
    private _powers: string[];
    private _alive: boolean = true;
    private _armor?: string;

    constructor (name: string, age: number, powers: string[], armor?: string) {
        this.id = randomUUID();
        this._name = name;
        this._age = age;
        this._powers = powers;
        this._armor = armor;
    }

    public set name(name: string) {
        if(!name) throw new Error("name invalid");
        this._name = name;
    }

    public get name() {
        return this._name;
    }

}

const hulk = new Hero('Hulk', 35, ['hulk esmaga', 'hulk destroi']);
