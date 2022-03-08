let str1 = "Hello World!!!";
let str2 = 'Hello World!!!';


let a = 'Hello';
let b = 'World';

//let str3 = a + ' ' + b;
let str3 = `This is the string ${a} ${b}`;
//let str3 = `Hello World!!!`;

let str4 = String.raw`Hello \n World!!!`;

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str3, typeof str3);
console.log(str4, typeof str4);

console.log(str1.length);

