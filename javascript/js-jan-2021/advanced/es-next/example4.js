let name = 'Whitebox Learning';
let course = 'UI/QA';
let keyName = 'ssn';


const student = {
    name,
    course,
    id: 100,
    [keyName]: '555-55-5555'
}

console.log(student.ssn);