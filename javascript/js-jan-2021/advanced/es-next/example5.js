//... (rest or spread)

let doSomething = (operation, ...items)  => {
    let result = 0;
    if (operation === 'sum') {
        for(let item of items) {
            result += item;
        }
    }
    return result;
}


console.log(doSomething('sum',1,2,3,4,5));

const numbers = [1,2,3,4,5];

console.log(doSomething('sum', ...numbers));

const subNames = ['Aysha', 'Bharathi', 'Harathi'];

const names = ['Karabi', 'Lavanya', ...subNames];

console.log(names);

const subObj = {
    name: 'WBL',
    phone: '555-555-5555'
}

let {name} = subObj;

console.log(name);

const person = {
    ssn: '555-55-5555',
    course: 'UI',
    ...subObj
}

console.log(person);

let [name1, name2, name3] = ['Aysha', 'Bharathi', 'Harathi'];
console.log(name1, name2, name3);

let x = 10;
let y = 20;

[x,y] = [y, x];

console.log(x, y);
