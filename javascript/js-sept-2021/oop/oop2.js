function Employee(name, age, salary) {

    this.name = name;
    this.age = age;
    this.salary = salary;
}


Employee.prototype.getAnnualSalaary = function () {
    return this.salary * 12;
}

Employee.prototype.getDetails = function () {
    return this.name + " " + this.age + " " + this.salary;
}

Employee.prototype.hike = function (percentage) {
    this.salary += (percentage * this.salary * 0.01);
}

const emp1 = new Employee("John", 30, 1000);
emp1.hike(10);
console.log(emp1.getDetails());

//emp1.toString();

const emp2 = new Employee("Mary", 25, 2000);
emp2.hike(20);
console.log(emp2.getDetails());


