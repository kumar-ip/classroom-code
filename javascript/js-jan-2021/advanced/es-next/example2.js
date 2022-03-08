function print() {
    console.log('Hello World!!!');
}

function add(a, b) {
    return a+b;
}

function doSomething(name) {
    this.name = name;
    return name.toUpperCase();
}

const print1 = () => console.log('Hello World!!!');

const add1 = (a, b) => a+b;

const doSomething1 = (name) => {
    this.name = name;
    return name.toUpperCase();
}

// print1();
// console.log(add1(2,3));
// console.log(doSomething1('whitebox learning'));

// setTimeout(() => console.log('I am back'), 1000);

a = 10;

function getSomething() {
    console.log('Get SOmething - ' + this.a);
   // var self = this;
    setTimeout(() => console.log('Return Value - ' + this.a), 1000);
}

getSomething();