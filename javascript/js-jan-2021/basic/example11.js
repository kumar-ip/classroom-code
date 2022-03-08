//unary
//binary
//ternary

//arthimetic

let a = 10;
let b = 5;

let c = a+b;
let d = a-b;
let e = a * b;
let f = a/b;
let g = a%b;
let h = ++b + b;
let i = ++b;

let z = undefined;
let z1 = a + z;
console.log(z1, typeof(z1));

let person = {};
//0, undefined, false, null, NaN, ''
if (person) {
    console.log('This will print');
}
let p1 = null;
if (p1) {
    console.log('This will not print');
}

//logical

let x = true;
let y = false;

let a1 = 0; //0000000000000000000000000000000
a1 &= 1;
let b1 = 1; //0000000000000000000000000000001
//a1 & b1 0 //0000000000000000000000000000000 

//&&, ||, ^, !
//&, |

console.log(!x);

//select * from employee where firstName like '%John%' and country = 'USA';


//truthiness 
let k = 0;
//0, false, undefined, null, ""

if (k) {
    console.log('K is truthy value');
}



//comparison

let l = 10; //a 10, b 5

let a1 = (l == a);
let b1 = (b != a);
let c1 = (b <= a);
let d1 = (a > b);

//assignment
let m = 10; 
m += 1; //m = m + 1;

//string 
let n = 'WBL';
let o = 'Training';

console.log(n + m);
console.log(n + o);


//new, ., [], ?:, ()

let p2 = {
    name: 'WBL'
};

console.log(p2.name);
let p3 = new Object();
console.log();

let p = (l == a) ? 1 : 2;

