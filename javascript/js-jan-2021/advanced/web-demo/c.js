let car = {
    name: 'Tesla',
    make: 'Tesla',
    model: 'S',
    year: 2020,
    getDetails: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

car.getDetails();
//explicitly calling - getDetails should use car as this.

var make = 'Honda';
var model = 'Accord';
var year = 2021;
var name = make;

var fn = car.getDetails;

fn();


let car2 = {
    name: 'Toyota',
    make: 'Toyota',
    model: 'Camry',
    year: 2019
}

car2.printDetails = fn;

car2.printDetails();


//HARD function

function print(a,b,c) {
    console.log('Hello World!!!');
    console.log(a,b,c);
    console.log(this.name);
}

//print();
print.call(car, 10, 20, 30);
print.apply(car2, [10, 20, 30]);