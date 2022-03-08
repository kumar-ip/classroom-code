const sym1 = Symbol();

console.log(typeof sym1);
console.log(sym1);

const sym2 = Symbol();

console.log(sym1 == sym2, sym1 === sym2);

const sym3 = Symbol('ssn');
const sym4 = Symbol('ssn');

console.log(typeof sym3, sym3);
console.log(typeof sym4, sym4);

console.log(sym3 == sym4, sym3 === sym4);

const sym5 = Symbol.for('555-55-5555');
const sym6 = Symbol.for('555-55-5555');
console.log(typeof sym5, sym5);
console.log(typeof sym6, sym6);

console.log(sym5 == sym6, sym5 === sym6);

const employee = {
    id: 1,
    name: 'John',
    [Symbol.for('ssn')]: '555-55-5555'
}

Object.getOwnPropertySymbols(employee);

for (const key in employee) {
    console.log(key, employee[key]);
}