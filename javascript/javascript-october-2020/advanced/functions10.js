function Car(make, model, year) {

    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getDetails =  function() {
    return `${this.make} ${this.model} ${this.year}`;
}

//Objects

var car1 = new Car('Tesla', 'S', 2019);
var car2 = new Car('Toyota', 'Camry', 2020);
var car3 = new Car('Acura', 'MDX', 2018);

console.log(car1.constructor);
console.log(car1.toString());
console.log(car1.getDetails());

//car1 pointer is created
//empty object is created, set the constructor to function which we did new
//this is set to this new empty object
//function logic is run with this new this context
//link is made between this new object and the prototype of the function

var obj = {};

function Employee() {

    var empId;
    var empName;
    var empSalary;

    this.setId = function(id) {
        empId = id;
    }

    this.setName = function(name) {
        empName = name;
    }

    this.setId = function(salary) {
        empSalary = salary;
    }

    this.getDetails = function() {
        return `${this.empId} ${this.empName} ${this.empSalary}`;
    }

}