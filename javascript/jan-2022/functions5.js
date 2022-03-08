function print() { //function declaration
    console.log("Hello World");
}


const print2 = print;

console.log(print2.name);
print2();


const sayHello = function () { //function expression
    console.log("Hello World");
} 

console.log(sayHello.name)

const sayHello2 = new Function("console.log('Hello World')"); //function constructor

const sayHello3 = () => console.log("Hello World"); //arrow function es6
