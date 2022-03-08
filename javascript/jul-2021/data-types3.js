//byte, short, int, long - integral
//float, double - decimal
//boolean 
//char

// let a = 10; //var, let, const
// let b = true;
// let c = 'Hello World!!!'
// console.log(typeof(a)); //number;
// console.log(typeof(b)); //boolean
// console.log(typeof(c)); //string, undefined


var a = 2;
var b = 3;
a = b;
console.log(a, b);
a = 4;
console.log(a, b);

let car1 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021
}

let car2 = {
    make: 'Tesla',
    model: 'S',
    year: 2019
}

car1 = car2;

car1.year = 2020;

console.log(car1.make, car1.model, car1.year);
console.log(car2.make, car2.model, car2.year);

