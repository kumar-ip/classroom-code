let arr1 = [1,2,3,4,5];
let names = ["Amitha", "Avanthi", "Aysha", "Bharthi", "Harathi"];
let arr2 = [1, true, 'Karabi'];
let arr3 = [10, false, 'Lavanya', undefined, null, {}, []];

//console.log(names[1]);

//console.log(arr3[5]);

let i = 0;
while (i < names.length) {
    //console.log(names[i]);
    i++;
}

// for (let i=0; i < names.length; i++) {
//     console.log(names[i]);
// }

//o,value, 1,

for(let i in names) {
    console.log(names[i]);
}

for(let name of names) {
    console.log(name);
}



// for(;;) {
//     console.log('Hello World!!!');
// }