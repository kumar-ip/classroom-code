function print(a,b,c){
    console.log("Hello World");
}

const print2 = function(){ //anyonymous function
    console.log("Hello World");
}

//functions are first class objects
//functions are allocated memory when declared
//functions are stored as objects in memory
//functions are variables..


console.log(print, typeof print);
console.log(print.length);
console.log(print.name);
console.log(print.toString());


// const doSomething = print;
// doSomething();


// let a = 10;

// let b = a;

// console.log(b);

// const student1 = {
//     name: "John",
//     age: 30
// }

// const student2 = student1;

