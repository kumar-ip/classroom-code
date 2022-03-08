let a = 10;

let b = a;

let car1 = {
    make: 'Honda',
    model: 'Accord'
}

let car2 = car1;
car2.year = 2021;

console.log(car1.year);

function print() {
    //return 'Hello World!!!';
    console.log('Hello World!!!');
}

let showMessage = print();
console.log(showMessage.name);
showMessage();


function add(a, b) {
    return a+b;
}

let summation = add;
let result = add(2,3);

console.log(typeof(summation), typeof(result));




