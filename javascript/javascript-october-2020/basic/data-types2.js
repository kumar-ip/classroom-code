//number, string, boolean
//value types

var a = 10;
console.log(a, typeof(a));
var b = 20;
a = b;
b = 30;
console.log(a, b);


//reference types - objects, arrays, 

var car1 = {
    make: 'Tesla',
    model: 'S'
}

console.log(car1.make, car1.model);
console.log(typeof(car1));

var car2 = {
    make: 'Honda',
    model: 'Accord'
}

car1 = car2;

car2.model = "CRV";

console.log(car1.model);

car1 = null;


var student =  {
    course: 'QA',
    batch: 2020
}


