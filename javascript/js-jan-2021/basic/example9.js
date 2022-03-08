let i = 1;
let j = i;
j = 20;
console.log(i);
var b = undefined;

let car1 = {
    make: 'Honda',
    model: 'Accord',
    year: 2000
}

let car2 = null;
car2 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2019
}

car1 = car2;

car1.year = 2020;
car1.color = "Blue";

console.log(car2.color, car2.year);