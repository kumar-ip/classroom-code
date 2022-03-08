let name = "Neha Nilawar";

let chars = name.toLowerCase().split('');

let set = new WeakSet();

for(let char of chars) {
    if(!set.has(char)) {
       set.add(char);
    }
}

console.log(set);

// for(let e of map) {
//     if(e.value > 1) {
//         console.log(e.key);
//     }
// }

// console.log(chars);