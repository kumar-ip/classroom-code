const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    ['job title']: 'teacher',
};

person['job title'] = 'developer';

let propName = 'age';

person[propName] = 35;

