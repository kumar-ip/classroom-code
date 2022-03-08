//arthimetic operators
let a = 10 + 20;
b = 20 - 10;
let c = 10 * 20;
let d = 33 / 10;
let e = 32 % 10;

let f = 10;
let g = ++f + f;
console.log(g);

//--

//logical operators
let h = true;
let i = false;

console.log(h && i);

//select * from employees where ssn = '123-45-6789' and country = 'USA';
// if(obj != null && obj.name == "John"){

console.log(h || i);

console.log(h ^ i);

//unary operators
console.log(!h);

//bitwise/binary operators

let j = 0; // 0000 0000
let k = 1; // 0000 0001

console.log(i & j);

//comparison operators
//>,<,>=,<=

let l = 10;
let m = 20;
let n = '10';
let o = undefined;
let p = null;

console.log(l == m);
console.log(l != m);
console.log(l === n);
console.log(o !== p);



//assignment operators

let q = 10;
q += 10;

//+=, -=, *=, /=, %=

//ternary operators

let r = (10 > 20) ? 'yes' : 'no';

console.log(r);

//?:

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName + ' ' + lastName);

let arr = [];
arr[0] = 'John';
let obj = {
    name: 'John'
};
let obj1 = new Object();

console.log(obj.name);


let x = ((10 + 2) - 4) * (30 / 5);