const person = { 
    name: 'John',
    age: 30,
}

person.phone = '555-555-5555';

console.log(person);

for(let key in person) {
    console.log(key, person[key]);
}   // for in loop

console.log(person.email);

//console.log(person.address.city);