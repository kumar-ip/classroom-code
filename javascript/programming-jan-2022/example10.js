const names = ['John', 'Mark', 'Jane', 'Mary', 'Pete', 'Steve'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(names.sort());
//console.log(numbers.sort()); //alphabetical order

const newNames = names.slice(1, 4);

console.log(newNames.toString());

const newNamesAgain = names.splice(1, 2, 'Anitha', 'Sri');

console.log(newNamesAgain.toString());
console.log(names.join(':'));