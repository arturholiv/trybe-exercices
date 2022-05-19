import Hero from "./Hero";

class Team {
    private _name: string;
    private _heroes: Hero[];

    constructor(name: string) {
        this._name = name;
        this._heroes = [];
    }

    public addHero(hero: Hero) {
        this._heroes.push(hero);
    }

    public set heroes(heroes: Hero[]){
        this._heroes = [ ...this._heroes, ...heroes ];
    }

}

const avengers = new Team('avengers');

const flash = new Hero('flash', 20, ['correr']);
const batman = new Hero('batman', 40, ['ser rico']);
const chapolin = new Hero('chapolin', 40, ['martelar'], 'armadura mágica');

avengers.heroes = [flash, batman]

console.log(avengers);
