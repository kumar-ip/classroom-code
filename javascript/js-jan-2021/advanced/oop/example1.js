function print() {
    console.log('Hello World!!!');
}

console.log(print.prototype, typeof(print.prototype));

console.log(print.prototype.constructor);

const obj1 = {};
const obj2 = new Object();

console.log(obj1.constructor, typeof(obj1.constructor));
console.log(obj2.constructor, typeof(obj2.constructor));