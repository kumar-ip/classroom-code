//public void doSomething() {
    //int i = 10;
 //  System.out.println("Hello World!!!");
//}

//doSomething();

let print = function() {
    let i = 10;
    console.log('Hello World!!!');
}

console.log(typeof(print));
console.log(print.name);
console.log(print.length);
console.log(print.toString());

function print2(a,b,c) {
    console.log('Hello World!!!');
    return undefined;
}

console.log(typeof(print2));
console.log(print2.name);
console.log(print2.length);
console.log(print2.toString());








let something = print;

something();