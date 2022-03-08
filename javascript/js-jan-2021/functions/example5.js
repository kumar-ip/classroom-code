let a = 10;
let b = a;
let arr = [1,2,3,4,a];
let obj = {
    name: 'Something',
    value: a
}
function doSomething(x) {
    console.log(x);
}
doSomething(a);
function doSomethingElse() {
    let somethhing = 10;

    return something;
}


let fn1 = function() {
    console.log('I am a function');
}

let fn2 = fn1;

let arr1 = [undefined, 'Hello', 10, obj, function() {
    console.log('I am a function!!!');
}];

arr1[4]();


let person = {
    name: 'WBL',
    phone: '555-555-5555',
    sayHello: function() {
        console.log('Hello! I am a person!');
    }
}

person.sayHello();


function callback(fn) {
    fn();
}

callback(fn1);

callback(function() {
    console.log('I am going into a function as a parameter');
});


let outer = function() {

    let inner = function() {
        console.log('Hello, I am inner function');
    }

    return inner;

}

outer()();