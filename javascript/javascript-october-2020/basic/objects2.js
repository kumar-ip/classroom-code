var student1 = {
    name: 'Jayshreeben',
    course: 'UI',
    "roll No": 1,
    enrolled: true,
    year: undefined
}

student1.course = "QA";

student1.phone = "555-555-5555";

delete student1.year;
delete student1["roll No"];


for(var key in student1) {
    console.log(key, student1[key]);
}

console.log(student1.course);

console.log(student1.address.city);

var a = undefined;
//a();
//console.log(a.something);