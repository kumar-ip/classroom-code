let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let arr1 = str1.split('');

console.log(arr1, arr1.toString(), arr1.length);

console.log(str1.split('').join(':'));

let str2 = str1.substring(0, 3);

let str3 = str1.substr(2, 5);

console.log(str2, str1, str3);