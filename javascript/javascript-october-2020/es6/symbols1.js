let s1 = Symbol();
let s2 = Symbol();
console.log(s1, typeof(s1));
console.log(s1 == s2);

let s3 = Symbol.for("ABC");
let s4 = Symbol.for("ABC");
console.log(s3 == s4);

const car = {
    make: 'Honda',
    model: 'Accord',
    "MAKE YEAR": 1999,
    [Symbol.for("SECRET")]: 'Something'
}

for(let [key, value] of Object.entries(car)) {
    console.log(key, value);
}

for(let i in car) {
    console.log(i, car[i]);
}

for(let key of Object.keys(car)) {
    console.log(key);
}

for(let val of Object.values(car)) {
    console.log(val);
}

console.log(Object.getOwnPropertySymbols(car));