const student = {
    name: 'WBL student',
    age: 30,
    gender: 'female',
    isAttendingClasses: true,
    courses: ['QA', 'UI'],
    getDetails: function() {
        return `Name is ${this.name}, age is ${this.age}.`;
    },
    "Completed Homework": undefined,
    instructor: {
        name: 'Sagar',
        course: 'UI'
    }
}

console.log(student.name);
console.log(student.courses[1]);
console.log(student.getDetails());
student.name = 'WBL UI Student';
console.log(student.name);
console.log(student["Completed Homework"]);
console.log(student.instructor.name);
console.log(student['instructor']['name']);
console.log(student.phoneNumber);
console.log(student.instructor.email);
//console.log(student.address.city);

const names = ['Amitha', 'Avanthi', 'Aysha'];

delete names[1];
names[10] = 'Bharathi';
console.log(names[3]);

for(let i in names) {
    console.log(i, names[i]);
}

for(let name of names) {
    console.log(name);
}


