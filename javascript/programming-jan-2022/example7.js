//collections or composition
//list or set
//set - unordered collection of unique elements
//list - ordered collection of elements

//lists - index, 0, 10. - max index - length - 1
//Java - immutable, same data type
//dynamic 
//reference type

const arr1 = [1, 2, 3, 4, 5];


//Please do not use this syntax
const arr2 = new Array(3); //length = 3
const arr3 = new Array(2,3,4);  //items

for(let index in arr1) {
    console.log(index, arr1[index]);
}

for(let item of arr2) {
    console.log(item);
}

for(let i = 0; i < arr3.length; i++) {
    console.log(i, arr3[i]);
}