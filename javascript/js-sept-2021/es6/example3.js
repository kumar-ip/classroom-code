//block scope - let and const ---var
//constants
//arrow functions
//default parameters
//rest parameters
//spread operator
//template literals ``
//destructuring

const names = ['Kshama', 'Indra', 'Sheeladevi'];

const obj = {
    name: 'Shilpa',
    course: 'QA'
}

// let a = names[0];
// let b = names[1];
// let c = names[2];

let key = 'Company';

let company = 'Whitebox Learning';

let [a1, b1, c1] = names;
console.log(a1, b1, c1);

let { name, course } = obj;
console.log(name, course);

const person = {
    name,
    course, 
    [key + "1"]: company,
    doSomething() {
        console.log('Doing something');
    }
}

console.log(person);

