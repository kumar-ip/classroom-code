function print() {
    console.log('Hello World!!!');
}

console.log(print.name);
console.log(print.length);
console.log(print.toString());

const greet = function() {
    console.log('Hello Universe!!!');
}

const print1 = print;

console.log(print1.name);
console.log(print1.length);
console.log(print1.toString());

print1();

//print();

let a = 10;
let b = a;