const car1 = new Object();

Object.defineProperty(car1, 'make', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'Honda'
});

car1.make = 'Tesla';

for (let key in car1) {
    console.log(key, car1[key]);
}