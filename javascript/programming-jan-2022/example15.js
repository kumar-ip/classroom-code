const print = function() {
    console.log('Hello World');
}

// let  a = 10;

// let arr = [];
// arr[0] = a;

// let obj = {};
// obj.value = a;

// function doSomething(parameter) {
//     let b = 10;

//     return b;
// }
// doSomething(a);

let arr = [undefined, 10, true, print, function() {
    console.log('Hello World');
}];

arr[4]();

let car = {
    brand: 'BMW',
    model: 'X5',
    year: 2020,
    print: function() {
        console.log('Hello, I am a car');
    }
}

car.print();


function outer(fn) {

    const inner = function() {
        console.log('Hello World');
    }

    return function() {

    };

}

const f = function() {
    console.log('Hello World');
}

outer(f);

outer(function() {
    console.log('Hello World');
});