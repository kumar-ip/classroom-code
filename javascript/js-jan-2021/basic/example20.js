let names1 = ["Bharthi", "Harathi", "Amitha", "Avanthi", "Karabi", "Lavanya", "Neha"];

let names2 = ["Prathima", "Subha", "Aysha", "Suneetha", "Vidyalakshmi", "Thasneem"];

let combinedArray = names1.concat(names2);
console.log(combinedArray);
console.log(names1);
console.log(names2);

let sub1 = names1.slice(names1.indexOf('Amitha'), 6);
let sub2 = names2.slice(names2.indexOf('Aysha'));
let sub3 = names2.slice(names2.indexOf('Suneetha'), 2);
let sub4 = names1.slice(names1.indexOf('Avanthi'), -4);

console.log(names1);
console.log(names2);
console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);