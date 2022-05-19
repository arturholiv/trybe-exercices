import Employee from "./Employee";
import IEmployee from "./IEmployee";

export default class Dev extends Employee implements IEmployee {
    private _project: string;
    private _coding: boolean;

    constructor(name: string, baseSalary: number, monthlyWorkload: number, project: string){
        super(name, baseSalary, monthlyWorkload);
        this._project = project;
        this._coding = false;
    }
    
    
    lunchTime(food: string): void {
        throw new Error("Method not implemented.");
    }
    
    startWork(): number {
        throw new Error("Method not implemented.");
    }
    
    finishWork(): void {
        throw new Error("Method not implemented.");
    }

}