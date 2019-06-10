/// - 1
function* generator() {
    yield 'Честно';
    yield "мало что понятно";
    yield 'в генераторах';
}
let gen = generator();
for (let value of gen) {
    alert(value);
}
//---------------------------------
/// - 2

//---------------------------------
/// - 3

let mixin = {
    getName: function () {
        alert(`Hello, i'm ${this.name}`);
    },
    getSalary: function () {
        alert(`My salary is ${this.salary}$`);
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

}
for (let key in mixin) {
    Employee.prototype[key] = mixin[key];
}
class Boss extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
}
let employee = new Employee('jack', 1000);
employee.getName()
employee.getSalary()
let boss = new Boss('john', 10000);
boss.getName();
boss.getSalary();
//---------------------------------------
/// - 4 
// НЕ ПОНЯЛ ЧТО НУЖНО СДЕЛАТЬ
//---------------------------------------