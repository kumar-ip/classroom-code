var student1 = {
    name: 'Anusha',
    course: 'UI',
    "roll No": 1,
    enrolled : true,
    address: {
        city: 'Dublin',
        state: 'CA'
    },
    phoneNumbers: ["555-555-5555", "111-111-1111"],
    year: undefined,
    referedBy: null,
}

student1.exam1Score = 10;

Object.defineProperty(student1, "exam1Score", {
    value: 10,
    writable: true,
    enumerable: true, 
    configurable: true
});

student1.exam1Score = 20;

console.log(student1.exam1Score);

for(var key in student1) {
    console.log(key, student1[key]);
}