var a = 10;
var b = a;
a = 20;
console.log(a, b);

var car1 = {
    make: 'Acura',
    model: 'MDX'
}

var car2 = car1;
car1.model = 'RDX';

console.log(car2.make, car2.model);

var print = function() {
    console.log('Hello World!!!');
}

var print2 = print;

print2();


