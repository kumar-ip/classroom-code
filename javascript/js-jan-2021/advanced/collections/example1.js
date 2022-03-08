let s1 = new Set();

s1.add(1);
s1.add(2);
s1.add(1);

//console.log(s1.size);

s1.add(3);
s1.delete(3);


for(let key of s1) {
    console.log(key);
}

console.log(s1.has(3));


let names1 = [];
let s2 = new Set(names1);


let m1 = new Map();
m1.set('4', 'Karabi');
m1.set('5', 'Harathi');

console.log(m1.get('5'));
m1.delete('5');

let names = [[1, "Subha"], [2, "Suneetha"]];
let namesObj = {
    '3': 'Prathima'
}
let m2 = new Map(names);
let m3 = new Map(namesObj.entries);

for(let [k, v] of m2) {
    console.log(k, v);
}