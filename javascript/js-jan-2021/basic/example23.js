let str1 = 'Hello World!!!';

console.log(str1.length);
console.log(str1[6]);
console.log(str1.charAt(7));

let chars = str1.split('');
console.log(chars);
let words = str1.split(' ');
console.log(words);

let i1 = str1.indexOf('World');
console.log(i1);

let b1 = str1.includes('World');
console.log(b1);

console.log(str1.startsWith('Hello'));

let substr1 = str1.slice(6, 11);
console.log(str1, substr1);

let substr2 = str1.substr(6, 5);
console.log(str1, substr2);

let substr3 = str1.substring(6, 11);
console.log(str1, substr3);

let str11 = 'Hello';
let str12 = 'World';

let str13 = str11.concat(str12);

let arr = [];
arr.push(str11, str12);
console.log(arr, typeof(arr))
console.log(arr.toString());