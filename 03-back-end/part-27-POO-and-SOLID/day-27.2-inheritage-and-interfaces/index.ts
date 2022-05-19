import Dev from "./Dev";
import Employee from "./Employee";
import IEmployee from "./IEmployee";
import Nurse from "./Nurse";

const joy = new Nurse('Enfermeira Joy', 1000, 200, 1234);
const joao = new Nurse('João', 1000, 200, 1234);
const rafa = new Dev('Rafa Guima', 10000, 250, 'projeto 2');
const andre = new Employee('andré', 10000, 250);

console.log(joy);
console.log(joao);
console.log(rafa);

function main(employee: IEmployee) {
    console.log(employee.startWork());
}



main(joy);
