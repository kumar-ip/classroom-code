var names = ["Mian", "Devika", "Jyolsna", "Devika"];


console.log(names.indexOf("devika")); //-1
names.lastIndexOf();

//console.log(names);

console.log(names.toString());
console.log(names.join("::"));

//reverse - changes the original array or new array with changes
names.reverse();
console.log(names);

var names1 = ["Lavanyaa", "Madhavi"];
//concat method
var combinedNames = names.concat(names1);
console.log("Combined", combinedNames);
console.log("Original", names);
console.log("Original Names 1", names1);

var dynamicNames = [].concat(["Neha", "Princilin"]);
console.log(dynamicNames);

var dynamicNames1 = [].concat([["Priyanka", ["Sasi"]], "Neha", "Princilin"]);
console.log(dynamicNames1);

//





