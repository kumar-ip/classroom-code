const arr1 = [undefined, 10, 'Hello', true, 'Hello World!!!'];

delete arr1[4]; //do not do this thing at all

for(let i in arr1) {
    console.log(i, arr1[i]);
}

console.log(arr1[10]);