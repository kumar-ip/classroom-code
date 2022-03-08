// while(true) {
//     console.log('Hello');
// }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// while(employees.hasNext()) {
//     let employee = employees.next();
//     console.log(employee.name);
// }

while (i < 10) {
    console.log(i);
    i++;
}



do {
    console.log(i);
} while(i < 10)


//iterations - goes forever.
//recursion - calling itself

const names = ['John', 'Jane', 'Mark'];
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

for(let index in names) {
    console.log(names[index]);
}

for(let name of names) {
    console.log(name);
}

names.forEach(name => console.log(name));