let i = 10;
let j = '10';

console.log(i === j); 


let k = undefined;
let l = null;

console.log(k === l);
console.log(k !== l);


let m = 0;
//m++;
if (m) {
    console.log('m is true');
}

//truthiness
//truthy or falsy
//undefined, null, 0, '', NaN, false - falsy values

let a = 10 / 'abc'; //NaN - not a number

console.log(a, typeof a);


let student = {
    navigator: 'Mozilla',
}

if (student && student.navigator) {
    console.log(student.navigator);
}