const names = ['Vidyalakshmi', 'Thasneem', 'Suneetha'];

let iterator = names[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}

// class Students {

//     constructor() {

//     }

//     [Symbol.iterator]() {
//         return {
//             next() {
                
//             }
//         }
//     }

// }