const names = ["Suganya", "Swathi", "Mian"];

// let s1 = names[0];
// let s2 = names[1];

let [s1, , s2, s4 = "K"] = names;

console.log(s1, s2, s4);

const car1 = {
    make: 'Honda',
    model: 'Accord',
    year: 1999
}

let {make:m, model:mo, year} = car1;

console.log(m, mo, year);

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x, y);