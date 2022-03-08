function add(a, b) {
    console.log(arguments);
    console.log(a, b);
    console.log('....................');
    return a + b;
}

// function add(a, b) {
// }
var a = 10;
var a = 20; //overriding
//signature = name + number of params + type of params + order of type of params
//public int add(int a, int b)
//public double add(double a, double b)
//public double add(double a, double b, double c)
////public double add(int a, double b)
////public double add(double a, int b)
//Overloading

let sum1 = add(2,3);
let sum2 = add(2,3,4);
let sum3 = add(3);
let sum4 = add();
let sum5 = add('Hello', 'World!!!');
let sum6 = add(false, false);
let sum7 = add(10, false);

console.log(sum1, typeof(sum1));
console.log(sum2, typeof(sum2));
console.log(sum3, typeof(sum3));
console.log(sum4, typeof(sum4));
console.log(sum5, typeof(sum5));
console.log(sum6, typeof(sum6));
console.log(sum7, typeof(sum7));