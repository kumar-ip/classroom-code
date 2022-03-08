var a;
var b;

function print() {
    console.log("Hello World!!!");
} //function declaration

var doSomething;


print();
doSomething();



a = 10;

b = 20;

doSomething = function() {
    console.log("Hello Universe!!!");
} //function expression

console.log(typeof(print));
console.log(typeof(doSomething));

//HOISTING