var names = ["Jayshree", "Anusha", "Devika", "Neha", "Princilin"];

names.sort();

console.log(names.toString());

var numbers = [8, 12, 1, 5, 6, 2, 10, 21];

numbers.sort();
console.log(numbers);


console.log('---------------------');

var slicedNames1 = names.slice(1, 3);

console.log(names.toString());
//console.log(slicedNames1.toString());

var slicedNames2 = names.slice(2);
//console.log(slicedNames2.toString());

var slicedNames3 = names.slice(2, 7);
//console.log(slicedNames3.toString());

// var slicedNames4 = names.slice(2, -2);
// console.log(slicedNames4.toString());

console.log(names.toString());
var splicedArray = names.splice(-3, 1, "Priyanka", "Renu", "Sevvanthi");
console.log(splicedArray);
console.log(names.toString());
