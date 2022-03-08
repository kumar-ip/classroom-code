let a = 10;
//unary  - 1 operand
//binary 
//ternary - 3 operands


//Arthimetic

let b = 10 + 20;
let c = 20 - 10;

let d = a++ + a;

console.log(d);


//Logical
//&&, ||, ^, !

let e = true;
let f = !e;

console.log(f, typeof(f));

//AND - worse case first - &&
//OR - best case first - ||

//select * from employees where firstName = 'Steve'  && country = 'USA' ;

// function checkStudent(student) {
//     if(student != null && student.name == 'Kshama') {
//     }
// }




//Binary
let g = 0; //000000000000000000000000000
let h = 1; //000000000000000000000000001

//g & h;     //000000000000000000000000000 = 0


//Comparison

let i = 10;
let j = 20;

let k = (i != j);


//Assignment

a = 20; // = assignment operator

a += 10; //a = a + 10;

//Textual
let l = 'Hello';
let m = 'World!!!';

m = 10;

console.log(l + m);

//Other

//[], {}, ., new, ()

let n = 10;
let o = 10;

let p = (m == n) ? 50: 60;

//let q = ((((10 + 20) / 3) * 4) %2) ++;

let r = 100/0;

console.log(r, typeof(r));

let s = 10 * 'Hello';

console.log(s, typeof(s));

let t = global.NaN;

console.log(typeof(t));

console.log(isNaN(t));