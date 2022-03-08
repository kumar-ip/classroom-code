const names = ["Mian", "Devika", "Jayshreeben", "Lavanyaa"];

// for(let name of names) {
//     console.log(name);
// }

let iterator = names[Symbol.iterator]();

console.log(iterator);

let item = iterator.next();
// item = iterator.next();
// item = iterator.next();
// item = iterator.next();
// item = iterator.next();
// item = iterator.next();
console.log(item);

// while(!item.done) {
//     console.log(item.value);
//     item = iterator.next();
// }
