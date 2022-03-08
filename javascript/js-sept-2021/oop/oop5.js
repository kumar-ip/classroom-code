class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    };

    getAnnualSalary() {
        return this.salary * 12;
    };

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }

    hike(percentage) {
        this.salary += this.salary * percentage / 100;
    }
}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this._department = department;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }


}

console.log(Employee.prototype, typeof Employee.prototype);

const emp1 = new Employee("John", 30, 1000);
emp1.hike(10);
console.log(emp1.getDetails());

const emp2 = new Employee("Mary", 25, 2000);
emp2.hike(20);
console.log(emp2.getDetails());

const mgr1 = new Manager("Peter", 40, 5000, "IT");
mgr1.hike(10);
console.log(mgr1.getDetails());
mgr1.department = "HR";