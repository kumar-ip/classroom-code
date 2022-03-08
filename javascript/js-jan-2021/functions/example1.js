//function, - returns
//method, subroutine, procedure - do not return- return, void

//set of statements, block, reusability, modularity

function print() {
    console.log('Hello World!!!');
    return undefined;
}

function printThis(str) {
    console.log(str);
}

function add(a, b) {
    return a+b;
}

print();
printThis('Hello Universe');
console.log(add(2,5));


console.log(typeof(print));

console.log(print.toString());



