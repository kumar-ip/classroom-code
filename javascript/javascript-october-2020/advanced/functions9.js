function print() {
    console.log("Hello World!!!");
}

console.log(print.prototype);
console.log(print.prototype.constructor);

var obj1 = new Object();
var obj2 = {};

console.log(obj1.constructor);
console.log(obj2.constructor);