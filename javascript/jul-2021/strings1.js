let str1 = ' Hello World ';
let str2 = "Hello Universe";
let str3 = `Hello Galaxy`;

console.log(typeof(str1), typeof(str2), typeof(str3));

console.log(str1.length);

console.log(str1[0]);

const arr1 = str1.split('');

console.log(arr1);

let str4 = str1.replace('World', 'World!!!'); //not changing original str, but returns new string.


console.log(str4);