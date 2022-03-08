//block scope - let and const ---var
//constants
//arrow functions

let i = 10;

const arr = [];

//const obj = {};

const fn = function() {};

const arrowFn = () => {};

const add = (a, b) => a + b;

const names = ['Kshama', 'Lija', 'Poorni'];

names.sort((a, b) => a.length - b.length);

console.log(names.toString());



function doSomething() {

 setTimeout(() => console.log(this.name), 1000);

//  setTimeout(function() {
//      console.log(this.name);
//  }, 1000);

}

let obj = {
    name: 'Kshama',
    fn: doSomething
}

obj.fn();



