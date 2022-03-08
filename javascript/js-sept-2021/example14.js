const names = ['Avanthi', 'Kshama', 'Lija', 'Pallavi', 'Shilpa', 'Sheeladevi'];

let i = names.indexOf('Lija');

let j = names.lastIndexOf('Lija');

//ABCDEFGHIJ

const names1 = ['Avanthi', 'Kshama', 'Lija'];

const names2 = ['Pallavi', 'Shilpa', 'Sheeladevi'];

const newNames = names1.concat(names2);

console.log(newNames);
console.log(names1);
console.log(names2);