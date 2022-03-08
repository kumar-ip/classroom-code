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

var student2 = Object.create(student1);
student2.name = "Devika";

console.log(student2.address);