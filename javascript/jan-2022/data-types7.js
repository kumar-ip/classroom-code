let student1 = {
    name: 'Pramitha',
    course: 'QA',
    rolNumber: 12345,
    batch: 'Jan-2022'
}

let student2 = null;

let student3 = {
    name: 'Kavya',
    course: 'UI',
    rolNumber: 12346,
    batch: 'Jan-2022'
}

student2 = student3;

console.log(student2.rolNumber, student3.rolNumber);
student2.course = 'QA';

console.log(student3.course);

student3 = {
    name: 'Lashmi',
    course: 'UI',
    rolNumber: 12347,
    batch: 'Jan-2022'
}

student2.course = 'UI';
student2.batch = 'Dec-2021';
student2 = null;



let i = 10;
let j = 20;

i = j;
console.log(i, j);
j = 30;
