//first class citizens

function print() {
    console.log('Hello World');
}

//function is a object
//print is a variable

//const print = new Object("function print() { console.log('Hello World'); }");

const sayHello = function(a,b,c) {
    console.log('Hello Universe');
}

const student = {
    name: 'John',
    age: 30,
}
console.log(student.name);


console.log(sayHello.toString());
console.log(sayHello.name);
console.log(sayHello.length);
console.log(print, typeof print);