const obj1 = {
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    registered: true,
    address: {
        address1: '6500 Dublin Blvd',
        city: 'Dublin',
        zip: 94588
    },
    phoneNumbers: ['000-000-0000', '555-555-5555'],
    customer: undefined,
    dealer: null
}

console.log(obj1.make, obj1['model']);

obj1.color = 'Red';

delete obj1.year; //DO NOT USE THIS

console.log(obj1);
console.log(obj1.address.city);
console.log(obj1.phoneNumbers[1]);

console.log(obj1.vin);

//console.log(obj1.owner.name); //type error

//let num = 10;
//console.log(num.name); //TYPE ERROR

//iterating through properties.
for (let key in obj1) {
    console.log(key, obj1[key]);
}


