function print(a, b, c) {
    console.log(this.name);
}


const person = {
    name: 'John',
    age: 30,
    salary: 1000,
    getDetails: function () {
        console.log(this.name + ' ' + this.age + ' ' + this.salary);
    }
}


//print();

const car = {
    name: 'BMW'
}

const person2 = {
    name: 'Pete',
    age: 40,
    salary: 2000,
}

print.call(car, 10, 20, 20);
print.apply(car, [10, 20, 30]);
person.getDetails.call(person2);