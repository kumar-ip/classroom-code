//hard binding

var car1 = {
    make: 'Honda',
    name: "Car 1",
    model: 'Accord',
    year: 2020,
    getDetails: function() {
        return `${this.make} - ${this.model} - ${this.year}`;
    }
}

console.log(car1.getDetails());//calling a function

var car2 = {
    make: 'Tesla',
    name: "Car 2",
    model: 'S',
    year: 2020
}

car1.getDetails.call(car2);



name = "Global Name";
function doSomething(a, b) {
    console.log("Hello World!!! " + this.name);
    console.log(a, b);
}

doSomething();//calling a function

doSomething.call(car1, 10, 20); //hard binding - telling the function using first parameter - this

doSomething.apply(car2, [10, 20]);