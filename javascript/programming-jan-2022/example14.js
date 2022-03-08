function print() {
    console.log('Hello World');
}

// const print = function() {
//     console.log('Hello World');
// }

let a = 10;
let b = a;
a = 'Hello';

const sayHello = print;

sayHello();

console.log(sayHello.name);

print = "Hello";

//print();

sayHello();