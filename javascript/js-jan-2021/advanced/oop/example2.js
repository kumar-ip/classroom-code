//function declarations
//function expressions
//function constructors
//arrow functions


//Classes = ES6 = functions/classes (to create objects)
//explicit, implicit, hard and new 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype = new Vehicle();


Car.prototype.getDetails = function() {
    return `Type: ${this.type} - Make: ${this.make} - Model: ${this.model} - Year: ${this.year}`
}

const car1 = new Car('Tesla', 'S', 2020);

console.log(car1.constructor);
const car2 = new Car('Honda', 'Accord', 2021);
const car3 = new Car('Toyota', 'Camry', 2019);
//empty new object is created
//that new object becomes this (new binding)
//function is executed with the this binding
//a link from this new object is made to function prototype. __pr

console.log(car1.getDetails());
console.log(Car.prototype);
    

function Vehicle() {
    this.type = 'Car';
}

