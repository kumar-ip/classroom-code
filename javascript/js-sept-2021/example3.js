let a = 10;

let b = 20;

console.log(a, b);

a = b;

console.log(a, b);

b = 30;

console.log(a, b);

let student1 = {
    name: 'Avanti',
    course: 'QA'
}
 //reference
 //objects
let student2 = {
    name: 'Indra',
    course: 'UI'
}

let student3 = null;

console.log(student1.name, student2.name);

student1 = student2;

console.log(student1.name, student2.name);

student2.name = 'Indra M';

console.log(student1.name, student2.name);