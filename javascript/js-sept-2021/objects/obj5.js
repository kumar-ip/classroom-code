const person = new Object();

Object.defineProperty(person, 'name', {writable: false, enumerable: true, configurable: false, value: 'John'});

person.name = 'Pete';

for (let key in person) {
    console.log(key);
}

console.log(person.name);