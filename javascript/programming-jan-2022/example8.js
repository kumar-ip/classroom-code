const arr1 = [];

console.log(arr1.length);
console.log(arr1[0]);

console.log(typeof(arr1));

console.log(Array.isArray(arr1));


const arr2 = [10, true, 'hello'];

for(let item of arr2) {
    console.log(item);
}

const arr3 = [10, true, 'hello', undefined];
console.log(arr3[3]);

arr3[4] = 'new item';
arr3[6] = 'new item2';

// for (let i = 0; i < arr3.length; i++) {
//     console.log(i, arr3[i]);
// }

for(let i in arr3) {
    console.log(i, arr3[i]);
}


const arr4 = [10, true, 'hello', undefined, null, {}, [], () => {}, Symbol('hello')];