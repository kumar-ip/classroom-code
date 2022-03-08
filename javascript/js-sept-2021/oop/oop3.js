const obj = {
    name: 'John',
    age: 30,
}


const obj2 = {};
const obj3 = new Object();
//function constructor

const obj4 = Object.create(obj);
console.log(obj4.name);