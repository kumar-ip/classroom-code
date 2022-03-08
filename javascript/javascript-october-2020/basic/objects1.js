var obj1 = {};

console.log(typeof(obj1));
console.log(obj1.constructor);

var student1 = {
    name: 'Chevi',
    course: 'UI',
    "roll No": 1,
    enrolled: true,
    year: undefined
}
console.log(student1.constructor, typeof(student1));

console.log(student1.name);
console.log(student1.address);
console.log(student1.year);
console.log(student1["roll No"]);


for(var key in student1) {
    console.log(key, student1[key]);
}


//Object literal.
//dynamic object - Javascript Object Notation JSON

var student2 = new Object();
console.log(student2.constructor, typeof(student2));