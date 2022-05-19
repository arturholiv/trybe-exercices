import IEmployee from "./IEmployee";

export default class Employee {
    
    protected _name: string;
    private _baseSalary: number;
    private _monthlyWorkload: number;

    constructor(name: string, baseSalary: number, monthlyWorkload: number) {
        this._name = name;
        this._baseSalary = baseSalary;
        this._monthlyWorkload = monthlyWorkload;
    }

    public set name(name: string) {
        this._name = name;
    }

    public calcSalary(extraHours: number): number {
        const salaryHour = (this._baseSalary / this._monthlyWorkload);
        const extraHourAmount = extraHours * salaryHour;
        const finalSalary = this._baseSalary + extraHourAmount;
        return finalSalary;
    }
}