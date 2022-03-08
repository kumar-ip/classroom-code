function Car() {
    this.make = "Toyota";
    this.model = "Camry";
    this.year = 1999;

    this.getDetails = function() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

var car1 = new Car();

//car1 pointer is created.
//empty object is created
//this is pointed to that empty object
//runs the function with this as new object context
//prototype is being pointed to function pointer.

c