let a = 10; //global scope

let student = { //global student
    name: "John",
    age: 30
}

function doSomething(a) { //local scope
    a = 30;
}

doSomething(a);

console.log(a);


function doSomethingElse(student)   { //local student
    student.age = 40;
}

doSomethingElse(student);

console.log(student.age);

