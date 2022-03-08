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

delete student.courses;

Object.defineProperty(student, 'phoneNumber', {
    value: '555-555-5555',
    enumerable: false, 
    configurable: false
});

for(let key in student) {
    console.log(key, student[key]);
}

console.log('--------For IN-----------------');

const keys = Object.keys(student);
for(const key of Object.keys(student)) {
    console.log(key, student[key]);
}

console.log('--------For Keys-----------------');

for(const [key, value] of Object.entries(student)) {
    console.log(key, value);
}

console.log('--------For Entries-----------------');

for(const key of Object.getOwnPropertyNames(student)) {
    console.log(key, student[key]);
}

console.log('--------For Property Names-----------------');