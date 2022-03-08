const add = function(a, b) {
    return a+b;
}

const print = function() {
    console.log('Hello World!!!');
    return undefined;
}

let a = add(10, 20);
let b = add;


let greet = print;
let c = print(); //undefined
greet();



const doSomething = add;
console.log(typeof(doSomething));
let result1 = doSomething(2, 4);
console.log(result1);
