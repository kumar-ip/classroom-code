function doSomething() {
    console.log("Hello World"); //camel case
}

doSomething();

const print = function(){
    console.log('Hello Galaxy!!!');
}

console.log(doSomething.prototype, typeof(doSomething.prototype));
console.log(print.prototype, typeof(print.prototype));
console.log(doSomething.prototype.constructor);

const obj1 = {};
const obj2 = new Object();

console.log(obj1.constructor, obj2.constructor, typeof(obj1.constructor));

const doSomethingElse = () => console.log('Hello Universe');
console.log(doSomethingElse.prototype, typeof(doSomethingElse.prototype));

function Person() { //Pascal case

    this.firstName = "John";
    this.lastName = "Doe";
    this.age = 30;
    this.eyeColor = "blue";

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(Person.prototype, typeof(Person.prototype));

const person1 = new Person(); //creating objects = they act as classes

console.log(person1.getFullName());

const person2 = new Person();

//new binding

//empty object is created
//this is set to that empty object.
//function is executed with new this binding.
//link is made from the new object to the prototype of the function.

//address of the new object is returned.

