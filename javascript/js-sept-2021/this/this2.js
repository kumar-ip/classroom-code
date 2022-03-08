const person = {
    name: 'John',
    age: 30,
    salary: 1000,
    getDetails: function () {
        console.log(this.name + ' ' + this.age + ' ' + this.salary);
    }
}


person.getDetails(); //explicit binding

const person2 = {
    name: 'Pete',
    age: 40,
    salary: 2000
}
person2.getDetails = person.getDetails;
person2.getDetails(); //explicit binding


name = 'William';
age = 50;
salary = 3000;

const getDetails = person.getDetails;
getDetails(); //implicit binding



