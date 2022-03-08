const person = {
    name: 'John',
    age: 30,
    isMarried: false,
    email: undefined,
    hobbies: ['Sports', 'Cooking'],
    address: {
        address1: '123 Main Street',
        city: 'Miami',
        zip: 33133
    },
   doSomething: function() {
        console.log('Doing something');
    }
};


person.doSomething();

person.hobbies[1] = 'Reading';
person.hobbies[2] = 'Tennis';

person.address.state = 'Florida';
person.address.zip = '33134';