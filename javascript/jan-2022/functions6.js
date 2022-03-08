let a = 10;

let b = 10;



numbers[3] = a;



student.age = a;

function doSomething(a) {
    let z = 10;

    return z;
}

doSomething(b);

const print = function() {
    console.log("Hello World");
}

const print2 = print;

let numbers = [1,2,3,a, print2, function() {

}];

let student = {
    name: "John",
    age: a,
    print: print2,
    doSomething: function() {
        console.log("Hello World");
    }
}