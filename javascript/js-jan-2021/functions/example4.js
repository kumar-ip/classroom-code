
//function declaration
function print() {
    console.log('Hello World!!!');
}

//function assignment
let showMessage = function() {
    console.log('Hello Universe');
}

//function object
let sayHello = new Function('console.log("Hello Galaxy");');

print();
showMessage();
sayHello();

let x = print;
let y = x;


console.log(typeof(print), print.name, print.length);
console.log(typeof(showMessage), showMessage.name, showMessage.length);
console.log(typeof(sayHello), sayHello.name, sayHello.length);