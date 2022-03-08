//function declaration
function print() {
    console.log("Hello World");
}

//function expression
const greet = function() {
    console.log('Hello Universe');
}

//function constructor
const sayHello = new Function('console.log("Hello Galaxy")');

//arrow function
const printHello = () => console.log(`Hello Solar System`);


print();
greet();
sayHello();
printHello();

