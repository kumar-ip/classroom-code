let student1 = {
    name: 'Shilpa',
    course: 'QA'
}

let student2 = null;

let student3 = {
    name: 'Sheeladevi',
    course: 'UI'
}

let student4 = student1;

console.log(student4.name);

student1 = null;

student2 = {
    name: 'Poorni',
    course: 'QA'
}

student1 = student2;

student2.name = 'Poorni A';

student2 = {
    name: 'Pallavi',
    course: 'UI'
}



console.log(student1.name, student2.name);

student1 = null;

console.log(student1.name, student2.name);
