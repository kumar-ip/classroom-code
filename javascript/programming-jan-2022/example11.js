//function, method, procedure, subroutine
//group of statements that performs a task
//resuable code
//unit of code
//something returns - do not return
//function - returns
//method, procedure, subroutine - do not returns (void method, non void method)

//verb, camelCase
function doSomething() {
    console.log("Hello World");
}

doSomething();

function add(a, b) {
    return a + b;
}

let sum = add(2,3);
console.log(sum, typeof sum);

let greeting = add('Hello ', 'World');
console.log(greeting, typeof greeting);

