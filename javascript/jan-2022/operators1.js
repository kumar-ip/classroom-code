//operator = operands

//unary operator
//binry operator
//ternary operator


//Arithmetic operators

let a = 10 + 20;
let b = 20 - 10;
let c = 10 * 20;
let d = 20 / 10; //division
let e = 20 % 10; //modulus

let f = 10;

console.log(++f + f);

// console.log(++f); //pre increment

//Logical   operators

    //AND, OR, XOR, NOT
let g = true;
let h = false;

console.log(g && h);
console.log(g || h);
console.log(g ^ h);
console.log(!g);

//select * from employee where firstName = 'john' and country = 'USA' ;

// function(student) {


//      if(student != null && student.firstName == 'john) {
//          return true;
//      }
// }


//assignment operators

let i = 10;
i += 10; //i = i + 10;
i -= 10; //i = i - 10;
i *= 10; //i = i * 10;
i /= 10; //i = i / 10;
i %= 10; //i = i % 10;


//comparison operators

console.log(i == 10);
console.log(i != 10);
console.log(i > 10);
console.log(i < 10);
console.log(i >= 10);
console.log(i <= 10);


//Binary Operators

let j  = 1; //0000000000000000000000000001
let k = 3;  //0000000000000000000000000011

console.log(j & k); //00000000000000000000000000001
console.log(j | k); //00000000000000000000000000111
console.log(j ^ k); //00000000000000000000000000011
console.log(~j); //11111111111111111111111111110

//Othe operators

const student1 = new Object(); //new object
const student2 = {}; //object literal
//() functions
const names = [] //arrays, access properties
names[0] = 'john';
student1.name = 'john'; //. operator access properties

let l = (k == j) ? 10 : 20; //?: