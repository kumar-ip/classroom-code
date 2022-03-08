function doSomething() {
    console.log('Hello World!!!');
}

// var doSomething = function() {
//     console.log('Hello World!!!');
// }

//doSomething();

var print = doSomething;

print();

console.log(print.name);
console.log(doSomething.name);

console.log(print.length);
console.log(doSomething.length);

var a = 10;
var b = a;

var car1 = {
    make: 'Toyota',
    model: 'Camry'
}

console.log(car1.make);