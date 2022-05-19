import Employee from "./Employee";
import IEmployee from "./IEmployee";

export default class Nurse extends Employee implements IEmployee {
    private _corenNumber: number;
    private _inAttendance: boolean;

    constructor(name: string, baseSalary: number, monthlyWorkload: number, corenNumber: number) {
        super(name, baseSalary, monthlyWorkload);
        this._corenNumber = corenNumber;
        this._inAttendance = false;
    }
    
    startWork(): number {
        throw new Error("Method not implemented.");
    }

    lunchTime(food: string): void {
        throw new Error("Method not implemented.");
    }
    
    finishWork(): void {
        throw new Error("Method not implemented.");
    }

    public sayHello() {
        this._name = 'qualquer coisa';
        console.log(`My name is ${this._name}`)
    }
}