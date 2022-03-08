var names = ["Neha", 'Madhavi', 'Lavanyaa', undefined];

names[4] = 'Swathi'; //addomg should not be done this way, do not do this.

console.log(names.length);
console.log(names);

console.log('-------------------');

delete names[1]; //NEVER DELETE LIKE THIS
console.log(names.length);
console.log(names);

console.log(names[1]);

console.log('-------------------');

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('-------------------');

//for in loop
for(var index in names) {
    console.log(names[index]);
}

console.log('-------------------');

//for of loop
for(var name of names) {
    console.log(name);
}


