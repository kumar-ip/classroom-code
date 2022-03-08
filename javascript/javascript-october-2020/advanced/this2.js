//explicit binding.

var car1 = {
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    getDetails: function() {
        return `${this.make} - ${this.model} - ${this.year}`;
    }
}

console.log(car1.getDetails());

var car2 = {
    make: 'Tesla',
    model: 'S',
    year: 2020
}

car2.getDetails = car1.getDetails;

console.log(car2.getDetails());

fn = car1.getDetails;

make = 'Toyota';
model = 'Camry';
year = 2020;

console.log(fn());